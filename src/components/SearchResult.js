import React from 'react';

const SearchResult = (props) => {
  return (


        <tr>
          <td>{props.result.food_name}</td>
          <td>{props.result.nf_calories}</td>
        </tr>



  )
}

export default SearchResult;
