let reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return Object.assign({}, state, {
        counters: [{
          id: action.id,
          title: action.title,
          count: action.count
        }, ...state.counters]
      })
    case 'INC_COUNTER':
      return Object.assign({}, state, {
        counters: state.counters.map((counter) => {
          return counter.id === action.id ?
          Object.assign({}, counter, {count: counter.count++}) : counter
        })
      })
    case 'DEC_COUNTER':
      return Object.assign({}, state, {
        counters: state.counters.map((counter) => {
          return counter.id === action.id ?
          Object.assign({}, counter, {count: counter.count--}) : counter
        })
      })
    case 'DELETE_COUNTER':
      return Object.assign({}, state, {
        counters: state.counters.filter((counter) => {
          return counter.id !== action.id
        })
      })
    default:
      return state;
    }
}
export default reducer

