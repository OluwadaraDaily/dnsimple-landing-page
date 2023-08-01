<template>
  <div class="tc flex flex-column items-center">
    <img :src="`${imgName}.svg`" width="55" class="mb2" />
    <p class="f5 lh-copy fw3">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'VerticalSubSection',
  props: {
    description: {
      type: String,
      required: true
    },
    imgName: {
      type: String,
      required: true
    }
  }
}
</script>
