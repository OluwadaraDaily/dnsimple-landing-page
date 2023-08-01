<template>
  <div class="tc mw5">
    <img :src="`${imgName}.svg`" width="35" />
    <p class="f5 lh-copy fw2">{{ description }}</p>
    <p class="f5 lh-copy fw2">{{ imgName }}</p>
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