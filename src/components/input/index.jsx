import * as React from 'react';
import './style.css'


export default function TextFieldSizes(props) {

  const onhandleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(e.target.location.value)
  };

  return (
    
      <form onSubmit={(e)=>onhandleSubmit(e)} >
        <input className='search-bar' name='location' type="text" />
        <button type='submit'>Search</button>
      </form>
    
  );
}
