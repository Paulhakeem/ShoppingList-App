import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/HelloWorld.vue'
import LoginList from './views/LoginList.vue'
import SignupList from './views/SignupList.vue'
import ShoppingList from './views/ShoppingList.vue'
import { auth} from "./firebaseConfig"


// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, far)



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
      {path: '/login', name: 'LoginList', component: () => LoginList},
      {path: '/signup', name: 'SignupList', component: () => SignupList},
      {path: '/shopping', name: 'ShoppingList', component: () => ShoppingList, meta: {requiresAuth: true}}
    ]
})

router.beforeEach((to, from, next) =>{
  const isAuthenticated = auth.currentUser
  const isAuthRequired = to.matched.some(record => record.meta.requiresAuth)

  if (!isAuthenticated && isAuthRequired) next({ name: 'login'})

  else next()
})

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
