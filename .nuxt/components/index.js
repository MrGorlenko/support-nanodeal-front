export { default as ActiveUser } from '../..\\components\\ActiveUser.vue'
export { default as Button } from '../..\\components\\Button.vue'
export { default as Form } from '../..\\components\\Form.vue'
export { default as Input } from '../..\\components\\Input.vue'
export { default as Message } from '../..\\components\\Message.vue'
export { default as MessageField } from '../..\\components\\MessageField.vue'
export { default as MessagesWrapper } from '../..\\components\\MessagesWrapper.vue'
export { default as User } from '../..\\components\\User.vue'
export { default as UsersWrapper } from '../..\\components\\UsersWrapper.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
