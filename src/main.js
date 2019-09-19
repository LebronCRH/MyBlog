// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@/assets/css/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'font-awesome/css/font-awesome.css'
import animated from 'animate.css'
import particles from 'particles.js'
import 'jquery'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import '@/assets/css/animate.css'
import VueWaypoint from 'vue-waypoint'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/'
import waterfall from 'vue-waterfall2'
 

Vue.use(VueWaypoint)
Vue.config.productionTip = false
AOS.init();
Vue.use(animated);
Vue.use(particles);
Vue.use(mavonEditor);
Vue.use(iView);
Vue.use(VueAwesomeSwiper, {autoplay: 3000,speed: 1000});
Vue.use(waterfall)

Vue.directive('scroll', {
  inserted(el, binding) {
    window.addEventListener('scroll', function() {
      if(document.documentElement.scrollTop + document.documentElement.clientHeight  >= document.getElementById(binding.value.dom).offsetTop-200) {
        binding.value.func();
      }
    })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
