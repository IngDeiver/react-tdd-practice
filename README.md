# TDD
Only important here are the unit tests, nothing more.

**Objective**: CRUD of Task list with redux and testing with jest and react-testing-library

## Screenshots
- Application
![Screenshot](https://firebasestorage.googleapis.com/v0/b/files-service.appspot.com/o/images%2Ftdd%20react%20practice.png?alt=media&token=eaa0cd4d-ec4c-4c80-8f8c-f0542e17e2da)

![Testing]()
- Test cases

![Cypress](https://cypress-io.ghost.io/blog/content/images/2019/05/auto-wait.gif)
- Cypress

## Testing plan before of develop
### Rendering
- **Task list component should** render without crash. :heavy_check_mark:
- **Task list component should** show "empty list" when the list of task list is empty. :heavy_check_mark:
- **Task list component should** have tasks into DOM when render with tasks array. :heavy_check_mark:
- **When Task list component render** should dispatch the fetch thunk action. :heavy_check_mark:
- **Task form component should** render without crash. :heavy_check_mark:
- **Task detail component should** render without crash. :heavy_check_mark:

### Api tasks service module
- **Should list** tasks when do get request with axios. :heavy_check_mark:
- **Should get** a task added when do post request with axios. :heavy_check_mark:
- **Should get** a task updated when do put request with axios. :heavy_check_mark:
- **Should get** a task removed when do delete request with axios. :heavy_check_mark:

### Interaction
- **should be disabled** the button add when not have text the input of title. :heavy_check_mark:
- **When writen** text into input text of tittle, this should content the value. :heavy_check_mark:
- **When clicked** the button what added a new task the input text title should be cleaned. :heavy_check_mark:
- **When clicked** the button what update should show form for edit and have the value to edit.
xx- **When clicked** the button what added a new task the DOM should content the new task added.
xx- **When clicked** the button what delete a task the DOM not should content the task removed.
xx- **When clicked** the button what update a task the DOM should have the new values and not have old values.

### Redux
- **When added** a new task should dispatch add task thunk action. :heavy_check_mark: 
- **When remove** a task should dispatch the remove task thunk action. :heavy_check_mark:
- **When update** a task should dispatch update task thunk action. :heavy_check_mark:

- **When call reducer** with action of type fetch, should return a tasks array.  :heavy_check_mark:
- **When call reducer** with action of type add, should return a tasks array with a new task added. :heavy_check_mark:
- **When call reducer** with action of type update, should return a tasks array with the task updated. :heavy_check_mark:
- **When call reducer** with action of type remove, should return a tasks array with a task substract. :heavy_check_mark:

### e2e (end to end with cypress)

# For to repply  run:
> - `first clone this repository`
> - `npm i`
> - `npm run test`
> - `npm run cypress or npm run cypress:headless`
> - `npm start`
