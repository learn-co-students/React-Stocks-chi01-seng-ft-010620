import React from 'react';

const SearchBar = (props) => { 
  const {handleFiltering, handleSorting, sortOn} = props
  let checkedUpOn=""
  sortOn !== true? checkedUpOn=true:checkedUpOn= false
  return (
   
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="checkbox" value="Alphabetically" checked={!checkedUpOn} onChange={(event)=>{handleSorting(event)}}/>
        Alphabetically
      </label>
      <label>
        <input type="checkbox" value="Price" checked={checkedUpOn} onChange={handleSorting}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event)=>{handleFiltering(event)}}>
        <option value="None">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
