import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const inputValue = useRef(null)
    const Dispach=useDispatch()
    const incriment=()=>{
        Dispach({type : 'INCREMENT'});
    }
    const decriment=()=>{
        Dispach({type:'DECREMENT'})
    }
    const additon=()=>{
      Dispach({type:'ADD',payload:{
        num : inputValue.current.value,
      },
      
      
    });
    inputValue.current.value="";
    
  }
  const subtract=()=>{
    Dispach({type:'SUB',payload:{
      num : inputValue.current.value,
    },
    
  });
  inputValue.current.value="";

  
}
  return (
    <>
    
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary"onClick={incriment}>
          +1
        </button>
        <button type="button" className="btn btn-success" onClick={decriment}>
          -1
        </button>
      </div>
      <div className="m-4">
      <input type="number"
      className="form-control"
      placeholder="Enter number"
      ref={inputValue}
       />
      <button type="button" className="btn btn-info m-3"onClick={additon}>
          add
        </button>
        <button type="button" className="btn btn-danger m-3" onClick={subtract}>
          sub
        </button>
        </div>
    </>
  );
};
export default Controls;
