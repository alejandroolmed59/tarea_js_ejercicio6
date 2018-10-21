/*
export function saludar(){
    console.log("holi");
}
*/

export let todoList = {
    listHTML: document.getElementById("todoList"),
    listTask: [],
    add(task, priority = false) {
        let element = document.createElement("li");
        element.innerText = task;
        /*element.addEventListener("click", () => {
           let parent = element.parentNode;
           if(parent){
               parent.removeChild(element);
           }
        });
        element.addEventListener("click", function(){
           console.log(this);
           let parent = this.parentNode;
           if(parent){
               parent.removeChild(this);
           }
        });
        */
        //Marcar finalizada
        var finalizada= document.createElement("input");
        finalizada.setAttribute("type", "checkbox");
        element.appendChild(finalizada);
        finalizada.addEventListener('change', function(){
            if(this.checked){
               element.style.textDecoration= "line-through";
            }else{
               element.style.textDecoration= "none";
            }
        });
       // Elmine de la lista
        var eliminar = document.createElement("input");
        eliminar.setAttribute("type", "submit");
        eliminar.setAttribute("value", "Eliminar");
        element.appendChild(eliminar);
        eliminar.addEventListener('click', function(){
           let parent = element.parentNode;
           if(parent){
               parent.removeChild(element);
           }
        })

        if (priority) {
            this.listTask.unshift({
                element,
                task,
                finalizada
            });
            this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
        } else {
            this.listTask.push({
                element,
                task,
                finalizada
            });
            this.listHTML.appendChild(element);
        }
    }
}
