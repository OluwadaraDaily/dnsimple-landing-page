<template>
  <div class="ba b--black bw2 pa3 w-30 ml-auto mr-auto absolute top-2 bg-white" style="transform: translateX(-50%); left: 50%;">
    <div class="flex justify-end w-100">
      <img src="close.svg" alt="" width="35">
    </div>

    <form action="GET" class="w-80 ml-auto mr-auto">
      <p class="f2 fw3 lh-copy mb4">Let's go bananas!</p>
      <div class="mb4">
        <label for="email" class="fw6 f6 mb2">Email</label> <br><br>
        <input type="email" name="email" id="email" class="w-100 ba b--black bw1" required>
      </div>
      <div>
        <label for="password" class="fw6 f6 mb2">Password</label> <br><br>
        <input type="password" name="password" id="password" class="w-100 ba b--black bw1" required>
      </div>
      <div class="mv4 ml-auto mr-auto">
        <AppButton text="Create my account" class="w-100" />
      </div>
    </form>
  </div>
</template>

<script>
import AppButton from './app-button.vue'
export default {
  name: 'Modal',
  components: {
    AppButton
  }
}
</script>
