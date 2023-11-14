let init = { count: 0 }
function Redux(type = init, action) {
  switch (action.type) {
    case "incre":
      return {
        count: type.count + 1
      }
    case "decre":
      return {
        count: type.count - 1
      }

    default:
      return type
  }
}

export default Redux;