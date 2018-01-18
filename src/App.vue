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

    export default {

      name: 'app',
      components: {
        'navbar': navbar
      }
}
</script>

