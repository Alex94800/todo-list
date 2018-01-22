import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '@/components/todo/TodoList'
import AddTodo from '@/components/todo/AddTodo'
import ModifyTodo from '@/components/todo/ModifyTodo'

Vue.use(VueRouter)

export default new VueRouter({

  mode: 'history',
  routes: [
    {
      path: '/',
      component: TodoList,
      props: {
        status: 'active'
      }
    },
    {
      path: '/add',
      name: 'addTodo',
      component: AddTodo
    },
    {
      path: '/modify/:id(\\d+)',
      name: 'modifyTask',
      component: ModifyTodo
    },
    {
      path: '/archived',
      name: 'archivedTodos',
      component: TodoList,
      props: {
        status: 'archived'
      }
    },
    {
      path: '/all',
      name: 'allTodos',
      component: TodoList,
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
