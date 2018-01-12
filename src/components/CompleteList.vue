<template>
  <div>
      <div class="row"
      v-if="showActive">
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
      v-if="showArchived">
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

    import store from '../store.js'

export default {

  props: ['status'],

  data () {
      return {
          state: store.state
    }
  },

  computed:{

      showArchived(){
          if (this.status.validator() === "archived" || this.status.validator() === "all"){
              return true
          }
      },

      showActive(){
          if (this.status.validator() === "active" || this.status.validator() === "all"){
              return true
          }
      },

      archivedList(){
          return this.state.list.filter(todo => todo.isArchived)
      },

      unarchivedList(){
          return this.state.list.filter(todo => !todo.isArchived)
      }
  },

  methods:{

      destroyTodo(todo){
          store.destroyTodo(todo)
        },

      modifyTodo(todo){
          store.modifyTodo(todo)
      },

      archiveTodo(todo){
          store.archiveTodo(todo)
      }
    }
}
</script>

