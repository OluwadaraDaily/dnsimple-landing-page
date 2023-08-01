<template>
  <button @click="onClick" class="bg-yellow pv3 ph4-l f6 fw6 br3">{{text}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
