import { useSelector } from "react-redux";


const DisplayContaint=()=>{
    const counter = useSelector((store)=>store.counter)
    return <p className="lead mb-4">
    This is Counter value : {counter}
  </p>

}
export default DisplayContaint;