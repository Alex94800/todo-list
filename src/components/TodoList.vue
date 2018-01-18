<template>
  <div>
    <br><br>
    <div class="row">
      <router-link to="/add" class="col-sm-1 col-sm-offset-1 btn btn-primary">{{ $t("button.addTask")}}</router-link>
    </div>
    <br>
    <h1 class="text-center">{{ $t("message.title") }}</h1>
    <br>
    <div
    v-for="todo in store.todoList">
      <component :is="viewTodo" :todo="todo"></component>
    </div>
  </div>
</template>

<script>

import store from '../config/store.js'
import Todo from './todo/Todo'
import TodoArchived from './todo/TodoArchived'

export default {

  props: {
    status: {
      type: String,
      default: 'active',
      validator (status) {
        if (['active', 'archived', 'all'].indexOf(status) === -1) {
          return false
        } else {
          return true
        }
      }
    }
  },

  components: {
    'todo': Todo,
    'todo-archived': TodoArchived
  },

  data () {
    return {
      store
    }
  },

  computed: {

    viewTodo () {
      if (this.status === 'active') {
        return 'todo'
      } else if (this.status === 'archived') {
        return 'todo-archived'
      }
    }
  }

}
</script>

