import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import auth from 'firebase/auth'

Vue.config.productionTip = false

// Initialize Firebase
let config = {
  apiKey: "AIzaSyBoftmkHvyxEUKmzsQR58VuLTZ2BVrLwBU",
  authDomain: "vue-slack-tuts.firebaseapp.com",
  databaseURL: "https://vue-slack-tuts.firebaseio.com",
  projectId: "vue-slack-tuts",
  storageBucket: "vue-slack-tuts.appspot.com",
  messagingSenderId: "34888896411"
};

firebase.initializeApp(config);

window.firebase = firebase

// define function
const unsubscribe = firebase.auth().onAuthStateChanged(user => {
  store.dispatch('setUser', user)

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  // recursion - this function calls itself on auth state change
  unsubscribe()

})