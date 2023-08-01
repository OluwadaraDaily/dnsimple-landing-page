
import initVue from '../components/init-vue.js';
import AppButton from '../components/app-button.vue';
import Header from '../components/header.vue'
import HSubSection from '../components/horizontal-subsection.vue'
import VSubSection from '../components/vertical-subsection.vue'
import Footer from '../components/footer.vue'

const components = {
  'app-button': AppButton,
  'app-header': Header,
  'h-subsection': HSubSection,
  'v-subsection': VSubSection,
  'app-footer': Footer
};

initVue(components);

