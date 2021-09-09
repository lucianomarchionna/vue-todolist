Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
        newToDo: "",
        toDos: [
            "Fare la spesa",
            "Fare i compiti",
            "Portare il cane a spasso"
        ]
    },
methods: {
    addToDo(){
        if(this.newTodo != ""){
            this.toDos.push(this.newToDo);
            this.newToDo = "";
        }
    },
    removeToDo(index){
        this.toDos.splice(index, 1);
    }
}
})