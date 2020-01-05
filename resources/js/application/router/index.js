import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import AccountView  from '../views/AccountView'
import RegisterView from '../views/RegisterView'
import LoginView    from '../views/LoginView'

Vue.use(VueRouter)

export default (
  new VueRouter({
    base: '/app/',
    routes: [
      {
        path: '/',
        name: 'index',
        component: AccountView
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
)
