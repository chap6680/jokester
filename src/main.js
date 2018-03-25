import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

//store.commit('INIT_JOKES', [{ test: 'test J' }, { test2: 'testJ2' }])

new Vue({
	el: '#app',
	store,
	render: h=> h(App)
})