import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/HelloWorld.vue'
import LoginList from './views/LoginList.vue'
import SignupList from './views/SignupList.vue'
import ShoppingList from './views/ShoppingList.vue'
import { auth} from "./firebaseConfig"


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
    .use(router)
    .mount('#app')
