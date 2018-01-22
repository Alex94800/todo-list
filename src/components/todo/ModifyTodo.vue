<template>

    <div class="container">

        <div class="row text-center">
            <h2>{{$t('message.modifyTask')}}</h2>
        </div>
        <div class="row">
            <div class="col-sm-6 col-sm-offset-2">
                <div class="form-group" :class="{'has-error': emptyName}">
                    <input class="form-control" type="text"
                           v-model="newName"
                           @keyup.enter="validateForm">
                </div>
            </div>
            <div class="col-md-4">
                <button class="btn btn-primary"
                @click="validateForm">{{$t('button.modify')}}</button>
                <router-link to="/">
                    <button class="btn btn-danger">{{$t('button.abort')}}</button>
                </router-link>
            </div>
        </div>
        <div class="row" v-if="emptyName">
            <div class="col-sm-6 col-sm-offset-2 alert alert-danger">
                {{$t('message.error.modify')}}
            </div>
        </div>
    </div>
    
</template>

<script>
    import store from '../../config/store.js'

    export default {
      data () {
        return {
          store,
          newName: '',
          emptyName: false
        }
      },

      methods: {
        modifyTodo () {
          store.todoList[this.$route.params.id].setName(this.newName)
          this.$http.put('https://jsonplaceholder.typicode.com/todos/' + (parseInt(this.$route.params.id) + 1), {
            'title': store.todoList[this.$route.params.id].getName()
          }).then(response => {
            this.$router.push('/')
          })
        },
        validateForm (e) {
          if (this.newName === '') {
            this.emptyName = true
            e.preventDefault()
          } else {
            this.modifyTodo()
          }
        }
      },

      mounted () {
        this.newName = store.todoList[this.$route.params.id].getName()
      }

    }
</script>