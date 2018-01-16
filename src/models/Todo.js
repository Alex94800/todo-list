class Todo{

    constructor(name){

        this.name = name
        this.isDone = false
        this.isArchived = false
    }

    getName(){
        return this.name
    }

    setName(name){
        this.name = name
    }

    getIsDone(){
        return this.isDone
    }

    setIsDone(value){
        this.isDone = value
    }

    getIsArchived(){
        return this.isArchived
    }

    setIsArchived(value){
        this.isArchived = value
    }

}

export default Todo