import React from 'react';

const SearchResult = (props) => {
  return (


        <tr className="col l12">
          <td>{props.result.food_name}</td>
          <td>{props.result.serving_qty}</td>
          <td>{props.result.nf_calories}</td>
          <td><button className="btn waves-effect waves-light right-align" type="submit">Add</button></td>
        </tr>



  )
}

export default SearchResult;
