
import initVue from '../components/init-vue.js';
import SignupButton from '../components/signup-button.vue';
import Header from '../components/header.vue'

const components = {
  'signup-button': SignupButton,
  'app-header': Header
};

initVue(components);

