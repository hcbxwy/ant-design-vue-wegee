import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Layout, Icon, Menu, Button, Drawer, Radio } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Layout);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Button);
Vue.use(Drawer);
Vue.use(Radio);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
