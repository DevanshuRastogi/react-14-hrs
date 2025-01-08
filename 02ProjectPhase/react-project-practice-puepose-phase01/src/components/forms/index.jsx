import { useState } from "react"

export default function FormComp (){
    const [nameVal , setNameVal] = useState("")
    function handleInputChange (evt){
        console.log(evt);
        const {value} = evt.target;
        setNameVal(value);
    }

    function handleSubmit(event){
        event.preventDefault();
    }
    return(
        <div>

        <h1>Forms In React </h1>
        <form onSubmit={handleSubmit}>
        <input name="name"  value={nameVal} id= "name" placeholder="write your name please" onChange={handleInputChange} / >
        <button type="submit">Submit</button>
        </form>
        </div>
    )
}