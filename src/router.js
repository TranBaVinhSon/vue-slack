import Vue from 'vue'
import Router from 'vue-router'
import Chat from './views/Chat.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'chat',
      component: Chat,
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) {
          next('/login');
        } else {
          next();
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  mode: 'history'
})