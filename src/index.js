import vuePrint from './print'
const install = (Vue) => {
    Vue.prototype.$p = vuePrint
}
export default install