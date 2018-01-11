<template>
  <div>
      <div class="row">
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
              <tr 
              v-for="todo in unarchivedList">
                <td>{{todo.name}}</td>
                <td>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" 
                    v-model="todo.isDone">
                  </div>
                </td>
                <td>
                  <button class="btn btn-xs btn-primary" 
                  @click="modifyTodo(todo)">
                    <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>           
                  </button>
                </td>
                <td>
                  <button class="btn btn-xs btn-danger" 
                  @click="destroyTodo(todo)">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>           
                  </button>
                </td>
                <td>
                  <button class="btn btn-xs btn-warning" 
                  @click="archiveTodo(todo)">
                    <span class="glyphicon glyphicon-download" aria-hidden="true"></span>           
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row"
      >
        <div class="col-xs-10 col-xs-offset-1 text-center">
          <br>
          <table class="table">
            <thead>
              <tr>
                <th class="text-center"><h2>Taches archivées</h2></th>
              </tr>
            </thead>
            <tbody>
              <tr 
              v-for="todo in archivedList">
                <td>{{todo.name}}</td>
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
      newTodo: ""
    }
  },
  computed:{

    archivedList(){
      return this.$parent.todos.filter(todo => todo.isArchived)
    },

    unarchivedList(){
      return this.$parent.todos.filter(todo => !todo.isArchived)
    }
  },

  methods:{

    addTodo(){
      if(this.newTodo){
        this.todos.push({
          name: this.newTodo,
          isDone: false,
          isArchived: false
        })
        this.newTodo = ""
      }
      else{
        window.alert("Entrez une tache")
      }

    },

    destroyTodo(todo){
      this.$parent.todos.splice(this.$parent.todos.indexOf(todo), 1)
    },

    modifyTodo(todo){
      todo.name = prompt("Entrez un nouveau nom pour la tache")
    },

    archiveTodo(todo){
      if(!todo.isDone){
        window.alert("Impossible d'archiver une tache en cours.")
      }
      else{

        todo.isArchived = true

      }
    }
  }
}
</script>

