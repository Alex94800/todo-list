<template>
    <div class="row" v-if="!todo.getIsArchived()">
        <div class="col-md-3 col-md-offset-1">
            <strong>{{todo.getName()}}</strong>
        </div>

        <div class="col-md-2">
            <div class="form-check">
                <strong>{{ $t(todoLabel) }}</strong>
                <input class="form-check-input" type="checkbox"
                       :checked="todo.getIsDone()"
                       @click="toggleIsDone(todo)">
            </div>
        </div>
        <div class="col-md-2">
            <router-link :to="'modify/' + store.todoList.indexOf(todo)" class="btn btn-sm btn-primary">
                {{$t('button.modify')}}
            </router-link>
        </div>
        <div class="col-md-2">
            <button class="btn btn-sm btn-danger"
                    @click="destroyTodo(todo)">
                {{$t('button.destroy')}}
            </button>
        </div>
        <div class="col-md-2">
            <button class="btn btn-sm btn-warning"
                    @click="archiveTodo(todo)">
                {{$t('button.archive')}}
            </button>
        </div>
        <br><br>
    </div>
</template>

<script>
  import store from '../../config/store.js'
  export default {
    props: {
      todo: {
        type: Object
      }
    },
    data () {
      return {
        store
      }
    },

    computed: {
      todoLabel(){
        if(this.todo.getIsDone()){
          return 'message.done'
        } else{
          return 'message.todo'
        }
      }
    },

    methods: {
      destroyTodo (todo) {
        store.todoList.splice(store.todoList.indexOf(todo), 1)
      },
      archiveTodo(todo){
        todo.setIsArchived(true)
      },
      toggleIsDone(todo){
        todo.setIsDone(!todo.getIsDone())
      }
    }

  }
</script>
