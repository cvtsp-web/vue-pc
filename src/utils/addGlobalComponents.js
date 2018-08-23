/**
 * 基于element-ui
 * 按需引入全局应用较多的组件
 */
import { 
    Dialog, 
    Input, 
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Row,
    Col
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

export default {
    install(Vue, config) {
        Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
        Vue.use(Dialog);
        Vue.use(Input);
        Vue.use(Radio);
        Vue.use(RadioGroup);
        Vue.use(Checkbox);
        Vue.use(CheckboxButton);
        Vue.use(CheckboxGroup);
        Vue.use(Select);
        Vue.use(Option);
        Vue.use(OptionGroup),
        Vue.use(Button);
        Vue.use(ButtonGroup);
        Vue.use(Form);
        Vue.use(FormItem);
        Vue.use(Tabs);
        Vue.use(TabPane);
        Vue.use(Row);
        Vue.use(Col);
    }
}
