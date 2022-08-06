import { createStore } from 'vuex'

const files = require.context('./modules', false, /\.ts$/)
const modules = {}

files.keys().forEach((key) => {
    modules[key.replace(/(\.\/|\.ts)/g, '')] = files(key).default
})
console.log('X1AXX1A modules', modules)
export default createStore({
    modules
})
