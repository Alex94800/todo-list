<template>

    <div class="container">

        <div class="row text-center">
            <h2>Modifier une tache</h2>
        </div>
        <div class="row">
            <div class="col-sm-6 col-sm-offset-2">
                <input class="form-control" type="text"
                v-model="newName"
                @keyup.enter="modifyTodo">
            </div>
            <div class="col-md-4">
                <button class="btn btn-primary"
                @click="modifyTodo">Modifier</button>
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

    import store from '../config/store.js'

    export default {
        data(){
            return{
                store,
                newName: ''
            }
        },

        methods:{
            modifyTodo(){
                store.todoList[this.$route.params.id].setName(this.newName)
                this.$router.push('/')
            }
        }

    }
</script>