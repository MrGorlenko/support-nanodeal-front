<template>
  <div :class="$style.chat">
    <UsersWrapper>
      <User
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :time="user.time"
        :last-message="user.lastMessage"
        :active="selectedDialog === user.id"
        @click="selectDialog(user.id, user.name)"
      />
    </UsersWrapper>

    <MessageField>
      <ActiveUser :name="activeName" />
      <MessagesWrapper>
        <Message
          v-for="message in messages"
          :key="message.id"
          :message-text="message.text"
          :message-time="message.time"
          :my-message="message.me"
        />
      </MessagesWrapper>
      <Form :form-type="'chat-form'">
        <Input
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
        { id: 1, name: 'Вася', time: '12:30', lastMessage: 'Че там?' },
        { id: 2, name: 'Петя', time: '11:13', lastMessage: 'Алло!' },
      ],
      messages: [
        { id: 1, text: 'yo', time: '12:31', me: true },
        { id: 2, text: 'sup', time: '12:33', me: false },
        { id: 3, text: 'how are u?', time: '12:35', me: true },
      ],
      activeName: null,
      selectedDialog: null,
    }
  },
  created() {
    this.selectedDialog = this.users[0].id
    this.activeName = this.users[0].name
  },
  methods: {
    selectDialog(id, name) {
      this.selectedDialog = id
      this.activeName = name
    },
  },
}
</script>

<style module lang="scss">
.chat {
  display: flex;
  height: 95vh;
  width: 100%;
}
</style>
