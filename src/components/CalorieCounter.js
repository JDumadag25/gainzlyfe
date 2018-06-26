import React from 'react';
import SearchResult from './SearchResult'
class CalorieCounter extends React.Component {
  state = {
    quotes: [],
    author: '',
    query:'',
    brandedSearch: []
  }

handleSearch = (e) => {
  e.preventDefault();
  this.setState({
    query: e.target.value
  })

}


handleSearchSubmit = (e) => {
  e.preventDefault();
  let q = this.state.query
    console.log(q, this.state.query)
  fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${q}`, {
    headers: {"x-app-id": "520a7953",
  "x-app-key":"05e435271d00303f87d291abd451842a", "content-type": "application/json"
}}).then(res => res.json()).then(res => this.setState({
  brandedSearch: res['branded']
}))

}




  render(){
    const searchResults = this.state.brandedSearch.map((result)=> {
          return <SearchResult handleAddButton={this.props.handleAddButton} result={result} />
    });
    return (
      <div className=" search-wrapper col s12 m4">
        <div className="icon-block">
          <h4>Search Foods</h4>
        <div className="row">
      <form className="col s12">

      <div className="row">
        <div className="input-field col s12">
          <input  onChange={(e)=> this.handleSearch(e)} id="search" value={this.state.query} placeholder="Search" />
          <button onClick={(e)=>this.handleSearchSubmit(e)} className="btn waves-effect waves-light">search</button>
        {this.state.brandedSearch.length > 0 ?
          <div className="search-results">

          <table>
          <tbody>
          <tr>
            <th>Food Name</th>
            <th>Serving Qty</th>
            <th>Calorie Count</th>
            <th></th>
          </tr>
            {searchResults}
            </tbody>
          </table>
          </div> : false}
        </div>
      </div>

      </form>

      </div>
        </div>
      </div>


    )
  }
}

export default CalorieCounter;
