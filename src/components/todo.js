import React, { useState } from 'react'
import './style.css';
const Todo = () => {
    const [inputdata, setInputData]=useState("");
    const [items, setItems] = useState([]);
    // add item fnc
    const addItem=()=>{
        if (!inputdata){
            alert('Input some data');
        }
        else{
            setItems([...items, inputdata]);
            console.log(items)
            setInputData("");
        }
    }
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src=".\images\todo.png" alt="todo-image" />
                <figcaption>Add your list here✌️.</figcaption>
            </figure>
            <div className='addItems'>
                <input type="text" placeholder='Add Items' className='form-control' value={inputdata} onChange={(event)=>setInputData(event.target.value)}/>
                <i className="fa fa-plus add-btn" onClick={addItem}></i>
            </div>
            <div className='showItems'>
                {
                  items.map((curElem, index)=>{
                    return(<div className='eachItem' key={index}>
                    <h3>{curElem}</h3>
                    <div className='todo-btn'>
                    <i className="far fa-edit add-btn"></i>
                    <i className="far fa-trash-alt add-btn"></i>
                    </div>
                </div>)

                  })  
                }
                
            </div>
            <div className='showItems'>
                <button className='btn effect04' data-sm-link-text="REMOVE ALL">
                   <span>CHECK LIST</span>       
                </button>

            </div> 
        </div>
      </div>
    </>
  )
}

export default Todo
