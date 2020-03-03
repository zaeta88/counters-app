let actions = {
  addCounter: function(id, title, count) {
    return {
      type: 'ADD_COUNTER',
      id: id,
      title: title,
      count: count
    }
  },
  incCounter: function(id) {
    return {
      type: 'INC_COUNTER',
      id: id,
    }
  },
  decCounter: function(id) {
    return {
      type: 'INC_COUNTER',
      id: id
    }
  },
  deleteCounter: function(id) {
    return {
      type: 'DELETE_COUNTER',
      id: id
     }
  }
}

export default actions

