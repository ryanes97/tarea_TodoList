window.onload = init;
   
function init() {
    let todoList = {
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
            });*/
            element.addEventListener("click", function(){
               console.log(this);
               let parent = this.parentNode;
               if(parent){
                   parent.removeChild(this);
               }
            });

            let eliminar = document.createElement("button")
            eliminar.innerText = "delete"
           // Añadir un boton para marcar de finalizado
           // Elmine de la lista
           eliminar-addEventListener("click", function(){
               console.log(this);
               let parent = element.parentNode;
               if(parent){
                    parent.removeChild(element);
               }
           })

            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}