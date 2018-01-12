import Vue from 'vue'


<template>
  <div id="app">

    <navbar></navbar>
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

    import addingBar from './components/AddingBar'
    import navbar from './components/Navbar'

    export default {

    name: 'app',

    components: {
        'adding-bar': addingBar,
        'navbar': navbar

    }

}
</script>

