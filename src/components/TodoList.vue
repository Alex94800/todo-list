<template>
  <div>

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand">Todo List</a>
        </div>
        <ul class="nav navbar-nav">
          <li><a href="#" @click="viewArchive = false">Liste actuelle</a></li>
          <li><a href="#" @click="viewArchive = true">Taches archivées</a></li>
        </ul>
      </div>
    </nav>

    <div class="container">

      <div class="row" v-if="!viewArchive">
        <div class="col-sm-6 col-sm-offset-2">
          <input class="form-control" type="text" placeholder="Ajouter tache" v-model="newTodo" @keyup.enter="addTodo()">
        </div>
        <div class="col-md-4">
          <button class="btn btn-primary" @click="addTodo()">Ajouter</button>
          </button>
        </div>
      </div>

      <div class="row" v-if="!viewArchive">
        <div class="col-sm-10 col-sm-offset-1 text-center">
          <br>
          <table class="table">
            <thead>
              <tr>
                <th class="text-center">Tache</th>
                <th class="text-center">Fait</th>
                <th class="text-center">Modifier</th>
                <th class="text-center">Supprimer</th>
                <th class="text-center">Archiver</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="todo in todos">
                <td>{{todo.name}}</td>
                <td>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="todo.isDone">
                  </div>
                </td>
                <td>
                  <button class="btn btn-xs btn-primary" @click="modifyTodo(todo)">
                    <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>           
                  </button>
                </td>
                <td>
                  <button class="btn btn-xs btn-danger" @click="destroyTodo(todo)">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>           
                  </button>
                </td>
                <td>
                  <button class="btn btn-xs btn-warning" @click="archiveTodo(todo)">
                    <span class="glyphicon glyphicon-download" aria-hidden="true"></span>           
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row" v-if="viewArchive">
        <div class="col-xs-10 col-xs-offset-1 text-center">
          <br>
          <table class="table">
            <thead>
              <tr>
                <th class="text-center"><h2>Taches archivées</h2></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="archivedTodo in archivedTodos">
                <td>{{archivedTodo.name}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<style>
.container{
  margin-top: 80px;
}
</style>

<script>
export default {
  data () {
    return {
      todos: [],
      archivedTodos: [],
      newTodo: "",
      viewArchive: false
    }
  },

  methods:{

    addTodo(){
      if(this.newTodo){
        this.todos.push({
          name: this.newTodo,
          isDone: false
        })
        this.newTodo = ""
      }
      else{
        window.alert("Entrez une tache")
      }

    },

    destroyTodo(todo){
      this.todos.splice(this.todos.indexOf(todo), 1)
    },

    modifyTodo(todo){
      todo.name = prompt("Entrez un nouveau nom pour la tache")
    },

    archiveTodo(todo){
      if(!todo.isDone){
        window.alert("Impossible d'archiver une tache en cours.")
      }
      else{
        this.archivedTodos.push(todo)
        this.todos.splice(this.todos.indexOf(todo), 1)
      }
    }
  }
}
</script>

