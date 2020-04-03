import paSelect from './src/components/paSelect/paSelect'

const exportCompents = {
    install(Vue, options) {
        if (typeof window != undefined && window.Vue) {
            Vue = window.Vue;
        }
        Vue.component(paSelect.name, paSelect)
    }
}

export default exportCompents;