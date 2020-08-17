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
  Tooltip,
  ButtonGroup,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  Tag,
  Tree,
  Icon,
  Row,
  Col,
  Collapse,
  CollapseItem,
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
Vue.use(Tree);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Tooltip);
Vue.use(Collapse);
Vue.use(CollapseItem);
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
//按需引入echarts
//引入基本模板
let echarts = require('echarts/lib/echarts');
// 引入饼图等组件
require("echarts/lib/chart/pie");
// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
require('echarts/lib/component/legendScroll');//图例翻译滚动
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
//只在开发环境中引入，生产环境不引入mock。mock文件夹与main.js同等级。
if(process.env.NODE_ENV !=="production")require("./mock");
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
