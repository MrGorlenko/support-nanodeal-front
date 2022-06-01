<template>
  <div :class="$style.chat">
    <UsersWrapper>
      <User
        v-for="company in companies"
        :key="company.company.uid"
        :name="company.company.name"
        :time="company.last_message.created_at"
        :last-message="company.last_message.text"
        :active="selectedDialog === company.company.uid"
        @click="selectDialog(company.company.uid, company.company.name)"
      />
    </UsersWrapper>
    <MessageField>
      <ActiveUser :name="activeName" />
      <MessagesWrapper>
        <Message
          v-for="(message, index) in messages"
          :key="index"
          :message-text="message.text"
          :message-time="message.created_at"
          :my-message="message.from_support"
        />
      </MessagesWrapper>
      <Form @submit="sendMessage" :form-type="'chat-form'">
        <Input
          v-model="message"
          :placeholder="'message'"
          :type="'text'"
          :input-type="'input-chat'"
        />
        <Button :button-type="'button-chat'" :button-text="'send'" />
      </Form>
    </MessageField>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: "Вася", time: "12:30", lastMessage: "Че там?" },
        { id: 2, name: "Петя", time: "11:13", lastMessage: "Алло!" },
      ],
      message: "",
      messages: [],
      companies: [],
      activeName: null,
      selectedDialog: null,
      init: true,
    };
  },
  mounted() {
    if (window.localStorage.getItem("access_token")) this.$router.push("/chat");
    if (!window.localStorage.getItem("access_token"))
      this.$router.push("/auth");
    this.getAllChatsInit();
  },
  methods: {
    async selectDialog(id, name) {
      this.selectedDialog = await id;
      this.activeName = name;
      this.connectWebSocket(this.selectedDialog);
    },
    async getMessages() {
      await this.socket.send(JSON.stringify({ command: "get_messages" }));
    },
    async sendMessage() {
      await this.socket.send(
        JSON.stringify({
          command: "new_message",
          text: `${this.message}`,
        })
      );
    },
    getAllChatsInit() {
      if (this.init)
        this.$axios
          .get(`http://13.53.66.70:8000/api/v1/chat/business_support`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          })
          .then((res) => {
            this.companies = res.data.data;
            this.selectedDialog = this.companies[0].company.uid;
            this.activeName = this.companies[0].company.name;
            this.init = !this.init;
          })
          .then(() => {
            this.connectWebSocket(this.selectedDialog);
          });
    },
    async connectWebSocket(companyId) {
      this.socket = await new WebSocket(
        `ws://13.53.66.70:8000/ws/business_support_chat/${companyId}/?Authorization=Bearer
        ${window.localStorage.getItem("access_token")}`
      );
      const self = this;
      this.messages = [];
      this.socket.onmessage = async function (event) {
        if (self.messages.length < 1)
          self.messages = await JSON.parse(event.data).message;
        else {
          await self.messages.unshift(JSON.parse(event.data).message);
        }
      };
      this.socket.onopen = async function () {
        self.getMessages();
      };
    },
  },
};
</script>

<style module lang="scss">
.chat {
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 20px;
  background: radial-gradient(
    47.39% 118.47% at 3.68% -21.35%,
    rgba(255, 219, 19, 0.1) 0%,
    rgba(255, 125, 75, 0.1) 30.4%,
    rgba(231, 130, 247, 0.1) 62.15%,
    rgba(216, 65, 137, 0.1) 100%
  );
}
</style>
