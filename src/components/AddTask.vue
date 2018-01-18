<template>

    <div class="container">
        <div class="row text-center">
            <h2>{{ $t('message.addTask') }}</h2>
        </div>
        <div class="row">
            <div class="col-sm-6 col-sm-offset-2">
                <div class="form-group" :class="{'has-error': emptyName}">
                    <input class="form-control" type="text" :placeholder="$t('form.placeholder.add')"
                        v-model="todoName"
                        @keyup.enter="validateForm" autofocus>
                </div>
            </div>
            <div class="col-md-4">
                <button class="btn btn-primary"
                        @click="validateForm">{{ $t('button.add') }}</button>
                </button>
                <router-link to="/">
                    <button class="btn btn-danger">{{ $t('button.abort')}}</button>
                    </button>
                </router-link>
            </div>
        </div>
        <div class="row" v-if="emptyName">
            <div class="col-sm-6 col-sm-offset-2 alert alert-danger">
                {{$t('message.error.add')}}
            </div>
        </div>
    </div>

</template>

<script>
    import store from '../config/store.js'
    import Todo from '../models/Todo.js'

    export default {

      data () {
        return {
          store,
          todoName: '',
          emptyName: false
        }
      },

      methods: {
        addTodo () {
          store.todoList.push(new Todo(this.todoName))
          this.todoName = ''
          this.$router.push('/')
        },

        validateForm (e) {
          if (this.todoName === '') {
            this.emptyName = true
            e.preventDefault()
          } else {
            this.addTodo()
          }
        }
      }

    }

</script>
