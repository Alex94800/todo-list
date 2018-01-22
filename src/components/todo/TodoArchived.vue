<template>
    <div class="row text-center"
    v-if="todo.getIsArchived()">
      <br>
        <strong>{{todo.getName()}}</strong>
    </div>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object
      }
    }
  }
</script>