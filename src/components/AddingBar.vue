<template>

    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-sm-offset-2">
                <input class="form-control" type="text" placeholder="Ajouter tache"
                       v-model="newTodo"
                       @keyup.enter="addTodo">
            </div>
            <div class="col-md-4">
                <button class="btn btn-primary"
                        @click="addTodo">Ajouter</button>
                </button>
            </div>
        </div>

    </div>

</template>

<script>

    import store from "../store.js"

    export default {

        data(){
            return{
                state: store.state,
                newTodo: ""
            }
        },

        methods: {
            addTodo(){
                store.addTodo(this.newTodo)
                this.newTodo = ""
            }
        }


    }


</script>
