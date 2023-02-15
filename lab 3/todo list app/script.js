let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');
    let todolist = [];//суда будем записывать каждое наше новое дело

    if (localStorage.getItem('todo')){
        todolist = JSON.parse(localStorage.getItem('todo')); //будем получать наши данные из локалсторедж что бы при ф5 у нас все не исчезало а забрасывалось из него
        displayMessage();
    }


    addButton.addEventListener('click', function(){

        let newTodo = {
            todo: addMessage.value,
            checked: false,
            important: false
        };
        //массив будет создаваться когда мы будем добавлять наше сообщение и будет содержать данные последнего сообщения

        todolist.push(newTodo);//закидываем наши ню туду в массив
        displayMessage();
        localStorage.setItem('todo',JSON.stringify(todolist))//set item будет создавать новое значение с именем х | и вернет нам строку в json формате


    }) //метод который отслеживает клик по кнопке и запускает функцию

    function displayMessage(){
        let displayMessage = '';
        todolist.forEach(function(item, i){//forEach - каждый раз перебирает все объекты

            //каждый раз когда будет создаваться "верстка" у нас будет индивинуальный идентификатор
            displayMessage += `
            <li>
                <input type='checkbox' id='item_${i}' ${item.checked ? 'checked': ''}> 
                <label for='item_${i}'>${item.todo}</label>
            
            
                </li> 
            `;
            todo.innerHTML = displayMessage
        });
    }
    todo.addEventListener('change', function(event){
        let idinput = event.target.getAttribute('id');//мы сможем отслеживать куда мы поставили галочку
        let forlabel = todo.querySelector('[for = '+idinput+']');
        let valuelabel = forlabel.innerHTML;

        todolist.forEach(function(item){
            if (item.todo == valuelabel){//если наше сообщение = valuelabel
                item.checked = !item.checked; //значение будет меняться на противоположное
                localStorage.setItem('todo',JSON.stringify(todolist))//и записываем в локалсторедж
            }
            
        });
    })