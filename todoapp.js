let tasks = JSON.parse(localStorage.getItem("tasks") )|| [];
       function showTasks(){
        let list=document.getElementById("taskList");
        list.innerHTML ="";

        tasks.forEach((tasks ,index) => {
             let li =document.createElement("li");
             li.innerHTML= tasks + " <button onclick='deletetask("+index+") '>Delete</button>";
             list.appendChild(li);
        });
       }
      
        function addTask(){
            let input = document.getElementById("taskInput");
            tasks.push(input.value);

            localStorage.setItem("tasks",JSON.stringify(tasks));
            input.value="";
            showTasks();
        }

        function deletetask(index){
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showTasks();
         }
         showTasks();

