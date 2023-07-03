export const addToDo = (data) => {
    return {
      type: "AddToDo",
      payload: {
        id: new Date().getTime().toString(),
        data: data,
      },
    };
  };
  
  export const DeleteToDo = (id) => {
    return {
      type: "Deleted",
      id
    };
  };
  
  export const RemoveToDo = () => {
    return {
      type: "RemoveAll",
    };
  };
  