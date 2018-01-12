let store = {

    state: {
        list: []
    },

    addTodo(name){
        if (name) {
            this.state.list.push({
              name: name,
              isDone: false,
              isArchived: false
            })

        }
    },

    destroyTodo(todo){
        this.state.list.splice(this.state.list.indexOf(todo), 1)
    },

    modifyTodo(todo){
        todo.name = prompt("Entrez un nouveau nom pour la tache")
    },

    archiveTodo(todo) {

        if (!todo.isDone) {
            window.alert("Impossible d'archiver une tache en cours.")
        }
        else {

            todo.isArchived = true

        }
    }
}

export default store

