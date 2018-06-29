import React from 'react';

const SearchResult = (props) => {
  const {food_name, serving_qty, nf_calories} = props.result
  return (


        <tr>
          <td>{food_name}</td>
          <td>{serving_qty}</td>
          <td>{nf_calories}</td>
          <td><button onClick={(e,food,cal)=> props.handleAddButton(e, food_name,nf_calories)} className="btn waves-effect waves-light right-align" >Add</button></td>
        </tr>



  )
}

export default SearchResult;
