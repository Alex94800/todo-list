<template>
  <div id="app">
    <todoList></todoList>
  </div>
</template>

<script>
import todoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    todoList
  }
}
</script>

