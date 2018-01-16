<template>

    <div class="container">
        <div class="row text-center">
            <h2>Ajout d'une tache</h2>
        </div>
        <div class="row">
            <div class="col-sm-6 col-sm-offset-2">
                <input class="form-control" type="text" placeholder="Ajouter tache"
                       v-model="todoName"
                       @keyup.enter="addTodo" autofocus>
            </div>
            <div class="col-md-4">
                <button class="btn btn-primary"
                        @click="addTodo">Ajouter</button>
                </button>
                <router-link to="/">
                    <button class="btn btn-danger">Retour</button>
                    </button>
                </router-link>
            </div>
        </div>
    </div>

</template>

<script>

    import store from "../config/store.js"
    import Todo from "../models/Todo.js"

    export default {

        data(){
            return{
                store,
                todoName: ''
            }
        },

        methods: {
            addTodo(){
                store.todoList.push(new Todo(this.todoName))
                this.todoName = ""
                this.$router.push('/')
            }
        }

    }


</script>
