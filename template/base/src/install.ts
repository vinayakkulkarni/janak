import VueCompositionApi from '@vue/composition-api';
import { VueConstructor } from 'vue';
import Package from './Package.vue';

let installed = false;

const install = {
  install(Vue: VueConstructor): void {
    if (installed) return;
    Vue.use(VueCompositionApi);
    Vue.component('<%= name %>', Package);
    installed = true;
  },
};

export default install;
