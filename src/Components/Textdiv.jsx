import React, { useState } from 'react';

const Textdiv = (props) => {
  // const [text, setText] = useState(props.info);
  // const [editing , setEditing] = useState(false);

  // function erase(event){
  //       setEditing(true);
  //       setText('');
  // }

  // function typehere(event) {
  //   setText(event.target.textContent);
  // }
const [searchValue, setSearchValue] = useState("");
function handleSearch(e){
  if(e.key==='Enter'){
    console.log(searchValue);
    setSearchValue("")
  }
}
  return (
    <div>
      <input className='text-box' type="text" placeholder='Search...' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} onKeyDown={handleSearch} />
    </div>
  )
}

export default Textdiv;


    // <div className='text-box'
    // contentEditable='true'
    // onClick={erase}
    // onInput={typehere}
    // onBlur={() => setEditing(false)}
    // >
        {/* if editing is true then show '' else show text*/
        /* {editing ? '':text}
    </div> */}