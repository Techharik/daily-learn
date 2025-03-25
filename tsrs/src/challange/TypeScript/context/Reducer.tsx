

type StateType = { count: number }
type ActionType = { type: 'INCREMENT' } | { type: 'DECREMENT' }


const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }

        default:
            return state
    }
}

export default reducer;