<template>
    <div class="row text-center"
    v-if="value.getIsArchived()">
      <br>
        <strong>{{value.getName()}}</strong>
    </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Object
      }
    }
  }
</script>

<style scoped>

</style>