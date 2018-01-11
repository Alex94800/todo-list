<template>

    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-sm-offset-2">
                <input class="form-control" type="text" placeholder="Ajouter tache"
                       v-model="$parent.newTodo"
                       @keyup.enter="$parent.addTodo">
            </div>
            <div class="col-md-4">
                <button class="btn btn-primary"
                        @click="$parent.addTodo">Ajouter</button>
                </button>
            </div>
        </div>
    </div>

</template>

<script>

</script>
