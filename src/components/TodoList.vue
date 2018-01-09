<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h1>Todo List</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-sm-offset-2">
          <input class="form-control" type="text" placeholder="Ajouter tache" v-model="newTodo" @keyup.enter="addTodo()">
        </div>
        <div class="col-md-2">
          <button class="btn btn-primary" @click="addTodo()">Ajouter</button>
        </div>
      </div>
      <div class="col-sm-10 col-sm-offset-1 text-center">
        <br>
        <table class="table">
          <thead>
            <tr>
              <th class="text-center">Tache</th>
              <th class="text-center">Fait</th>
              <th class="text-center">Modifier</th>
               <th class="text-center">Supprimer</th>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todos: [],
      newTodo: "",
      modifiedName:"Modifié!!"
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
    }
  }
}
</script>

