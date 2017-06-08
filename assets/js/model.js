class Task{
    constructor(name){
        this.name=name;
        this.isComplete = false;
    }

    edit(newName){
        this.name=newName;
    }

    complete(){
        this.isComplete=true;
    }

   
    
}


class List{
    constructor(name){
        this.name=name;
        this.tasks=[];
    }

    addTask(task){
        this.tasks.push(task);
    }
    
    removeTask(i){
        this.tasks.splice(i,1);
    }
}
