let init ={}

export default function Redux(state = init,action){
    switch(action.type){
        case "set":
            state = action.data
            return { ...state}
        case "add":
            state.todojob.push({
                id: parseInt(state.todojob[state.todojob.length - 1].id)+1+'',
                todo: action.news
            })
            return { ...state}
        case "del":
            state.todojob = state.todojob.filter(i => i.id!=action.id)
            return { ...state}
        case "edit":
            state.todojob = state.todojob.map(i => {
                if(i.id === action.id)
                    i.todo = action.news
                return i 
            })

            return { ...state}
        default:
            return { ...state}
    }
}