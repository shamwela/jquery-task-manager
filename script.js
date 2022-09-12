$(document).ready(() => {
  const taskForm = $('#taskForm')
  taskForm.submit((event) => {
    event.preventDefault()

    const tasks = $('#tasks')
    const task = $('<li class="flex"></li>')
    const taskName = $('#taskName').val()
    const taskNameSpan = $('<span class="mr-auto cursor-grab"></span>').text(
      taskName
    )
    const doneButton = $(
      '<button class="mr-2 text-blue-400 cursor-pointer">Done</button>'
    )
    const deleteButton = $(
      '<button class="text-red-600 cursor-pointer">Delete</button>'
    )

    task.append(taskNameSpan, doneButton, deleteButton)
    tasks.append(task)

    doneButton.click(() => taskNameSpan.addClass('line-through'))
    deleteButton.click(() => task.remove())

    tasks.sortable()
    taskForm.trigger('reset')
  })
})
