import Vue from 'vue'
import VueRouter from 'vue-router'
import CompleteList from '@/components/CompleteList'
import AddTask from '@/components/AddTask'
import ModifyTask from '@/components/ModifyTask'

Vue.use(VueRouter)

export default new VueRouter({

  mode: 'history',
  routes: [
    {
      path: '/',
      component: CompleteList,
      props: {
        status: 'active'
      }
    },
    {
      path: '/add',
      name: 'addTask',
      component: AddTask
    },
    {
      path: '/modify/:id(\\d+)',
      name: 'modifyTask',
      component: ModifyTask
    },
    {
      path: '/archived',
      name: 'archivedTodos',
      component: CompleteList,
      props: {
        status: 'archived'
      }
    },
    {
      path: '/all',
      name: 'allTodos',
      component: CompleteList,
      props: {
        status: 'all'
      }
    },
    {
      path: '*',
      redirect: '/'
    }

  ]
})
