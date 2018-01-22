<template>
  <div id="app">

    <navbar></navbar>
    <router-view></router-view>

  </div>
</template>

<style>
.container{
  margin-top: 80px;
}
</style>

<script>
    import navbar from './components/layouts/Navbar'
    import store from './config/store.js'
    import Todo from './models/Todo.js'

    export default {

      name: 'app',
      components: {
        'navbar': navbar
      }
}
</script>

