<template>
  <div id="app">
  	
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand">Todo List</a>
        </div>
        <ul class="nav navbar-nav">
          <li><router-link :to="{name: 'activeTodos'}">Liste active</router-link></li>
          <li><router-link :to="{name: 'archivedTodos'}">Liste archivée</router-link></li>
          <li><router-link :to="{name: 'allTodos'}">Liste complète</router-link></li>
        </ul>
      </div>
    </nav>
    <br><br>

    <adding-bar></adding-bar>

    <router-view></router-view>

  </div>
</template>

<style>
.container{
  margin-top: 80px;
}
</style>

<script>


export default {
  name: 'app',
  data(){
  	return{
  		todos: [],
  		newTodo:""
  	}

  },


  methods: {

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
	}
}
</script>

