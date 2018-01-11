<template>
  <div class="row">
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

  computed:{

    archivedList(){
      return this.$parent.todos.filter(todo => todo.isArchived)
    }

  }
}
</script>