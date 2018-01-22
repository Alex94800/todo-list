class Todo {
  constructor (name, isDone) {
    this.name = name
    this.isDone = isDone
    this.isArchived = false
  }

  getName () {
    return this.name
  }

  setName (name) {
    this.name = name
  }

  getIsDone () {
    return this.isDone
  }

  setIsDone (value) {
    this.isDone = value
  }

  getIsArchived () {
    return this.isArchived
  }

  setIsArchived (value) {
    this.isArchived = value
  }
}

export default Todo
