
import initVue from '../components/init-vue.js';
import AppButton from '../components/app-button.vue';
import Header from '../components/header.vue'
import HSubSection from '../components/horizontal-subsection.vue'
import VSubSection from '../components/vertical-subsection.vue'
import Modal from '../components/modal.vue'
import Footer from '../components/footer.vue'
import { toggleModal } from '../../assets/javascripts/index.js'

const components = {
  'app-button': {
    ...AppButton,
    beforeCreate() {
      this.onClick = this.$props.type === 'button' ? toggleModal : () => {};
    }
  },
  'h-subsection': HSubSection,
  'v-subsection': VSubSection,
  'app-footer': Footer
};

initVue(components);
