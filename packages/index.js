import KemButton from './Button'



const components = [
    KemButton,



];

const install = function(Vue,opts = {}) {
    if (install.installed) return;

    components.map(component => Vue.component(component.name, component));

    Vue.prototype.$MIMI = {

        size: opts.size || 'small',
        tableSize: opts.tableSize || 'small',
        formSize: opts.formSize || 'small',
        buttonSize: opts.buttonSize || 'mini',
        menuType: opts.menuType || 'text',

    };



};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}



export default {
    install,
    KemButton,

};
