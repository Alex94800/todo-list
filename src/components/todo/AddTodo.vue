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
        <div :class="{'loader': isLoading}"></div>
    </div>

</template>

<script>
    import store from '../../config/store.js'
    import Todo from '../../models/Todo.js'

    export default {

      data () {
        return {
          store,
          todoName: '',
          emptyName: false,
          isLoading: false
        }
      },

      methods: {
        addTodo () {
          this.isLoading = true
          this.$http.post('https://jsonplaceholder.typicode.com/todos/', {
            'title': this.todoName,
            'completed': false
          } ).then(_ => {
            this.$router.push('/')
          })
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

<style>
    .loader {
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        margin-left: auto;
        margin-right: auto;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
