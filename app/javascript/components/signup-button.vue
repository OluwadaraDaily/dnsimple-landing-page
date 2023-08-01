<template>
  <button @click="onClick" class="border-2 border-rose-500 p-10 bg-[#FAC810]">{{text}}</button>
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
