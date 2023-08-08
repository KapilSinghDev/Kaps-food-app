import {React,useState} from 'react'

function Mobinoutcomp(props) {
  // const [isEmpty, setIsEmpty] = useState(false);
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    props.onChange(inputValue); // Call the parent component's onChange function to update the value
    props.setIsEmpty(inputValue.trim() === '');
  };
  return (
    <div className='mob-in-comp'>
        <h2>{props.heading}</h2>
        <input className='mob-text-box' 
            type='text'
            placeholder={props.placeholder}
            value={props.value}
            onChange={handleInputChange}
            // required
        />
    </div>
  )
}

export default Mobinoutcomp;
