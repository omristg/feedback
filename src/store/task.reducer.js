
const initialState = {
    tasks: [],
    selectedTask: null,
    filterBy: null
}

export function taskReducer(state = initialState, action) {

    let newState = state;

    switch (action.type) {
        case 'SET_BOARDS':
            newState = { ...state, tasks: [...action.tasks] }
            break
        case 'SET_BOARD':
            return { ...state, selectedTask: action.task }
        case 'REMOVE_BOARD':
            newState = { ...state, tasks: state.tasks.filter(task => task._id !== action.taskId) }
            break
        case 'UPDATE_BOARD':
            newState = {
                ...state,
                selectedTask: action.task,
                tasks: state.tasks.map(currTask => {
                    return (currTask._id === action.task._id) ? action.task : currTask
                })
            }
            break
        case 'ADD_BOARD':
            newState = { ...state, tasks: [...state.tasks, action.task] }
            break
        case 'SET_FILTER':
            newState = { ...state, filterBy: { ...action.filterBy } }
            break;
        default:
            return newState;
    }

    return newState;
}