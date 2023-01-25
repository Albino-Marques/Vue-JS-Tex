import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
createApp({
    data() {
        return {
            m1: 'Bem vindo ao Vue.JS!',
        }
    }
})//.mount('#app')

// import calculos from './calculos.js'

// createApp(calculos).mount('#app')

import formUser from './formUser.js'
createApp(formUser).mount('#app2')