import vuePrint from './print'
const install = (Vue) => {
    //vue2
    if (typeof Vue === 'function') {
        Vue.prototype.$p = vuePrint
    //vue3
    } else {
        Vue.config.globalProperties.$p = vuePrint
    }
}
export default install