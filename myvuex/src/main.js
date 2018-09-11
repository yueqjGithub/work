// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import Vuex from 'vuex'
import store from './store'
import VideoPlayer from 'vue-video-player'
// 加载video player
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
require('@/../static/css/playerCss.css')

Vue.use(VideoPlayer)

Vue.use(Vuex)
Vue.use(MintUI)
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
