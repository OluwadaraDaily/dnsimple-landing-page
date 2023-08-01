<template>
  <div :class="isReverseFlex ? `flex flex-row-reverse items-center justify-between mw8 ml-auto mr-auto pb6` : `flex items-center justify-between mw8 ml-auto mr-auto pb6`">
    <div class="mw6">
      <p class="f4 lh-header fw3 mb3 ">{{ title }}</p>
      <p class="f6 lh-copy fw2">{{ subtitle }}</p>
    </div>
    <div>
      <img :src="`${image}.svg`" width="350"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HSubSection',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    something: {
      type: String,
    },
    reverseFlex: {
      type: [Boolean, String],
      default: false
    }
  },
  computed: {
    isReverseFlex() {
      if(typeof this.reverseFlex === 'string') {
        return this.reverseFlex.toLowerCase() === 'true';
      }
      return this.reverseFlex;
    }
  }
}
</script>
