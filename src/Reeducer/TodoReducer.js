const intialData={
    list :[]
}

const TodoReducer =(state=intialData,action)=>{
switch(action.type){
    case "AddToDo":
        const {id,data}=action.payload;
        return{
            ...state,
            list:[
                ...state.list,
                {
                 id:id,
                 data:data
                }
            ]
        }

        case "Deleted":
        const newList = state.list.filter((elem) => elem.id !== action.id);
        return{
            ...state,
            list:newList
        }
        case "RemoveAll":return{
            ...state,
            list:[]
        }

        default:return state;
}
}

export default TodoReducer;