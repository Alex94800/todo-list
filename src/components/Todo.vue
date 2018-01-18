<template>
    <div class="row" v-if="!value.getIsArchived()">
        <div class="col-md-3 col-md-offset-1">
            <strong>{{value.getName()}}</strong>
        </div>

        <div class="col-md-2">
            <div class="form-check">
                <span
                v-if="value.getIsDone()">
                    <strong>{{$t('message.done')}}</strong>
                </span>
                <span v-else>
                    <strong>{{$t('message.todo')}}</strong>
                </span>
                <input class="form-check-input" type="checkbox" :checked="value.getIsDone()" @click="value.setIsDone(!value.getIsDone())">
            </div>
        </div>
        <div class="col-md-2">
            <router-link :to="'modify/' + store.todoList.indexOf(value)" class="btn btn-sm btn-primary">
                {{$t('button.modify')}}
            </router-link>
        </div>
        <div class="col-md-2">
            <button class="btn btn-sm btn-danger"
                    @click="destroyTodo(value)">
                {{$t('button.destroy')}}
            </button>
        </div>
        <div class="col-md-2">
            <button class="btn btn-sm btn-warning"
                    @click="value.setIsArchived(true)">
                {{$t('button.archive')}}
            </button>
        </div>
        <br><br>
    </div>
</template>

<script>
  import store from '../config/store.js'
  export default {
    props: {
      value: {
        type: Object
      }
    },
    data () {
      return {
        store
      }
    },
    methods: {
      destroyTodo (todo) {
        store.todoList.splice(store.todoList.indexOf(todo), 1)
      }
    }
  }
</script>
