
import initVue from '../components/init-vue.js';
import AppButton from '../components/app-button.vue';
import HSubSection from '../components/horizontal-subsection.vue'
import VSubSection from '../components/vertical-subsection.vue'
import Footer from '../components/footer.vue'

const components = {
  'app-button': AppButton,
  'h-subsection': HSubSection,
  'v-subsection': VSubSection,
  'app-footer': Footer
};

initVue(components);
