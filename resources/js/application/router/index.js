import Vue from 'vue'
import VueRouter from 'vue-router'
import { getUser }  from '../api'

// Views
import AccountView  from '../views/AccountView'
import RegisterView from '../views/RegisterView'
import LoginView    from '../views/LoginView'

Vue.use(VueRouter)

const router = new VueRouter({
  base: '/app/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: AccountView,
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    getUser().then(() => next())
      .catch(e => {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      })
  }
  next()
})

export default router
