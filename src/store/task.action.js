import { taskService } from "../services/task.service";

export function loadTasks() {
    return async (dispatch, getState) => {
        try {
            const tasks = await taskService.query()
            // console.log(tasks);
            dispatch({ type: 'SET_BOARDS', tasks })
            return Promise.resolve(tasks)
        } catch (error) {
            console.log('Cannot get Tasks', error);
        }
    }
}

export function getById(taskId) {
    return async (dispatch) => {
        try {
            const task = await taskService.getById(taskId)            
            dispatch({ type: 'SET_BOARD', task })
            return task
        } catch (error) {
            console.log('Cannot get Tasks', error);
        }
    }
}

export function removeTask(taskId) {
    return async (dispatch) => {
        try {
            await taskService.remove(taskId)
            dispatch({ type: 'REMOVE_BOARD', taskId })
            return Promise.resolve()
        } catch (err) {
            throw err
        }
    }
}

export function updateTask(taskToUpdate) {
    return async (dispatch, getState) => {
        try {
            const savedTask = await taskService.save(taskToUpdate)
            dispatch({ type: 'UPDATE_BOARD', task: savedTask })
            return savedTask
        } catch (err) {
            console.log('Cannot Update', taskToUpdate)
        }
    }
}

export function addTask(taskToSave) {
    return async (dispatch) => {
        try {
            const savedTask = await taskService.addTask(taskToSave)
            dispatch({ type: 'ADD_BOARD', task: savedTask })
            return Promise.resolve(savedTask)
        } catch (err) {
            console.log('Cannot Add', taskToSave)
        }
    }
}
