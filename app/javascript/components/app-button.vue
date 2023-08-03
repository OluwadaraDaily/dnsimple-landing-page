<template>
  <button class="bg-yellow pv3 ph4-l f6 fw6 br3" :type="type" @click="onClick">{{text}}</button>
</template>

<script>
import { toggleModal } from '../../assets/javascripts/index.js'
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  beforeCreate() {
    this.onClick = this.$props.type === 'button' ? toggleModal : () => {};
  }
}
</script>
