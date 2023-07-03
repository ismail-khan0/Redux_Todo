import { useState } from 'react';
import './Index.css'
import { addToDo,DeleteToDo,RemoveToDo } from '../action/Index';
import { useSelector,useDispatch } from 'react-redux';

function Index() {
  const [inputData, setinputData] = useState('');
  const list=useSelector((state)=>state.TodoReducer.list);
  const dispatch= useDispatch();
  return (
    <div className='main_Class'>
    < div className='chil_Class'>
     <figure>
       <figcaption>Add your list here✌️</figcaption>
     </figure>


     <div className='addItem'>
       <input className='input' placeholder=' add item..' type='text' value={inputData} onChange={(event)=> setinputData(event.target.value)}/>
       <i className='fa fa-plus addBtn'></i>
       <button className='btn' onClick={()=>dispatch(addToDo(inputData),setinputData(""))}>+</button>
     </div>

     <div className='showItems'>
      {
        list.map((elem)=>{
          return(
          <div className='eachItem' key={elem.id}>
         <h3 className='heading'>{elem.data}</h3>
         <div className='todo-btn'>

         <button className='delet-btn' title='Delet Item' onClick={()=>dispatch(DeleteToDo(elem.id))}>x</button>
      </div>
      </div>
      )
        })
      }
      
     </div>
<div className='showItems'>
  <button className='checkBtn effect04' data-sm-link-text="remove All"
onClick={()=>dispatch(RemoveToDo())}
><span></span>Chick List</button>
</div>

    </div>
    </div>
  )
}

export default Index;
