$(document).ready(function(){

  const formEl = $('#js-form'),
        headingTask = $('#js-task-heading-input'),
        emptyListEl = $('#js-empty-list'),
        taskContainerEl = $('#js-task-container-left'),
        taskText = $('#js-task-descr-textarea');
        
  var emptyList = function(){
    if(!taskContainerEl.children().length){
      emptyListEl.fadeIn('slow');
    }else{
      emptyListEl.css('display', 'none')
    }
  }      
 

  function addTask(e){
    e.preventDefault();
    
    const name = headingTask.val(),
          text = taskText.val();
          

    taskContainerEl.append(`<li class="task-li">
    <article class="task-block">
      <div class="header">
        <h3 class="task-list-heading">${name}</h3>
      
        <button type="submit" class="delete-task" aria-label="удалить дело" aria-controls="task-block"></button>

        <button type="submit" class="collapse-task" aria-label="свернуть описание дела" aria-expanded="false" aria-controls="task-block"></button>
      </div>

      <p class="task-list-text">${text}</p>
  </li>`);
    this.reset();
    emptyList();
    }

    formEl.on('submit', addTask);

    $('#js-task-container-left').on('click', '.delete-task', function(){
      var task = $(this).parents('.task-li');
      task.remove();
      emptyList();
    });

    $('#js-task-container-left').on('click', '.collapse-task', function(){
      var taskCollapse = $(this).parents('.task-li').find('.task-list-text');
      taskCollapse.slideToggle();
    }); 
         
});



  
  
