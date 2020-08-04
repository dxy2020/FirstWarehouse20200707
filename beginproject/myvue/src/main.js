import Vue from "vue";
import router from "./router";
import store from "./store";
// import ElementUI from "element-ui";完整引入
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VCharts from 'v-charts';
import App from "./App.vue";
import {
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Switch,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  Tag,
  Icon,
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Loading,
  MessageBox,
  Message,
} from 'element-ui';
Vue.use(Avatar);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Switch);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(Tag);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

Vue.use(Loading.directive);
Vue.prototype.$axios=axios;
// Vue.use(ElementUI);
Vue.use(VCharts);
Vue.config.productionTip = false;
//只在开发环境中引入，生产环境不引入mock。mock文件夹与main.js同等级。
if(process.env.NODE_ENV !=="production")require("./mock");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
