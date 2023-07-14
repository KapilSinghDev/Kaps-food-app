import React, { useState } from 'react';

const Textdiv = (props) => {

const [searchValue, setSearchValue] = useState("");
function handleSearch(e){
  if(e.key==='Enter'){
    console.log(searchValue);
    setSearchValue("")
  }
}
// const [input,setInput] = useState("");
// const [count,setCount] = useState(0);

// const handleType = (event) => {
//   setInput(event.target.value);
//   setCount(input.split(" ").length);
// }


// console.log("The number of words = ",count);
  return (
    <div>
      <input className='text-box' type="text" 
      placeholder={props.placeholder} 
      value={searchValue}
      onChange={(e)=>setSearchValue(e.target.value)} 
      onKeyDown={handleSearch}
      // onChange={handleType}
       />
    </div>
  )
}

export default Textdiv;
