# TDD
Only important here are the unit tests, nothing more.

## Testing plan before of develop

**Objective**: CRUD of Task list with redux and testing with jest and react-testing-library
![Screenshot]()

### Rendering
- **Task list component should** render without crash. :heavy_check_mark:
- **Task list component should** show "empty list" when the list of task list is empty. :heavy_check_mark:
- **Task list component should** have tasks into DOM when render with tasks array. :heavy_check_mark:
- **Task form component should** render without crash. :heavy_check_mark:
- **Task detail component should** render without crash. :heavy_check_mark:


### Interaction
- **should be disabled** the button add when not have text the input of title. :heavy_check_mark:
- **When writen** text into input text of tittle, this should content the value. :heavy_check_mark:
- **When clicked** the button what added a new task the DOM should content the new task added.
- **When clicked** the button what added a new task the input text title should be cleaned.
- **When clicked** the button what delete a task the DOM not should content the task removed.
- **When clicked** the button what update a task the DOM should have the new values and not have old values.
- **When the input its emty** the button add should is disabled.


### Redux
- **When Task list component render** should dispatch the action {type:'task/fetchTask, payload: null}.
- **When added** a new task should dispatch the action {type:'task/addedTask', payload: objectTask}.
- **When remove** a task should dispatch the action {type:'task/removeTask, payload: taskId}.
- **When update** a task should dispatch the action {type:'task/updateTask, payload: taskId}.

- **When call reducer** with action of type fetch, should return a tasks array.
- **When call reducer** with action of type add, should return a tasks array with a new task added.
- **When call reducer** with action of type update, should return a tasks array with the task updated.
- **When call reducer** with action of type remove, should return a tasks array with a task substract.

### For to repply  run:
> - `first clone this repository`
> - `npm i`
> - `npm run test`
> - `npm start`
