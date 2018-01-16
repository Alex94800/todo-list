<template>
  <div>
    <br><br>

    <router-link to="/add" class="col-sm-1 col-sm-offset-1 btn btn-primary">Ajouter tache</router-link>
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
                <td>{{todo.getName()}}</td>
                <td>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" :checked="todo.getIsDone()" @click="todo.setIsDone(!todo.getIsDone())">
                  </div>
                </td>
                <td>
                  <router-link :to="'modify/' + store.todoList.indexOf(todo)" class="btn btn-xs btn-primary">
                    <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>           
                  </router-link>
                </td>
                <td>
                  <button class="btn btn-xs btn-danger" 
                  @click="destroyTodo(todo)">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>           
                  </button>
                </td>
                <td>
                  <button class="btn btn-xs btn-warning" 
                  @click="todo.setIsArchived(true)">
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
                <td>{{todo.getName()}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
</template>

<script>

import store from '../config/store.js'

export default {

  props: {
      status:{
          type: String,
          default: "active",
          validator(status){

              if (["active", "archived", "all"].indexOf(status) === -1){
                  return false
              }
              else{
                  return true
              }

          }
      }
  },

  data () {
      return {
          store,
    }
  },

  computed:{
      showArchived(){
          if (this.status === "archived" || this.status === "all"){
              return true
          }
      },

      showActive(){
          if (this.status === "active" || this.status === "all"){
              return true
          }
      },

      archivedList(){
          return store.todoList.filter(todo => todo.getIsArchived())
      },

      unarchivedList(){
          return store.todoList.filter(todo => !todo.getIsArchived())
      }
  },

  methods:{

      destroyTodo(todo){
          store.todoList.splice(store.todoList.indexOf(todo), 1)
        }
  }
}
</script>

