<template>
  <button @click="onClick" class="pa2 bg-gold b">Click me</button>
</template>

<script>
export default {
  methods: {
    onClick () {
      console.log("Clicked");
    }
  }
}
</script>
