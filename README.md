# TDD
Only important here are the unit tests, nothing more.

## Testing plan before of develop

**Objective**: CRUD of Task list with redux and testing with jest and react-testing-library

### Rendering
- **Task list component should** render without crash. :heavy_check_mark:
- **Task list component should** show "empty list" when the list of task list is empty. :heavy_check_mark:
- **Task list component should** have task when render with task list. :heavy_check_mark:
- **Task form component should** render without crash. :heavy_check_mark:
- **Task detail component should** render without crash. :heavy_check_mark:


### Interaction
- **When writen** text into input text of tittle, this should content the value.
- **When clicked** the button what added a new task the DOM should content the new task added.
- **When clicked** the button what added a new task the input text title should be cleaned.
- **When clicked** the button what delete a task the DOM not should content the task removed.
- **When clicked** the button what update a task the DOM should have the new values and not have old values.


### Redux
- **When Task list component render** should dispatch the action {type:'task/taskFetch, payload: null}.
- **When added** a new task should dispatch the action {type:'task/taskAdded', payload: objectTask}.
- **When remove** a task should dispatch the action {type:'task/taskRemove, payload: taskId}.
- **When update** a task should dispatch the action {type:'task/taskUpdate, payload: taskId}.

### For to repply  run:
> - `first clone this repository`
> - `npm i`
> - `npm run test`
> - `npm start`
