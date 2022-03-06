import { httpService } from './http.service'

export const taskService = {
    query,
    getById,
    remove,
    save,
    addTask,
}



async function query() {
    const tasks = await httpService.get('task')
    return tasks
}


async function getById(taskId) {
    const task = await httpService.get(`task/${taskId}`)
    return task
}

async function remove(taskId) {
    await httpService.delete(`task/${taskId}`)
    return taskId
}

async function save(taskToUpdate) {
    const taskId = taskToUpdate._id
    await httpService.put(`task/${taskId}`, taskToUpdate)
    return taskToUpdate
}


async function addTask(taskToAdd) {
    const newTask = await httpService.post('task', taskToAdd)
    return newTask
}





