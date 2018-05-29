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
    console.log(this.state.brandedSearch);
    const searchResults = this.state.brandedSearch.map((result)=> {
          return <SearchResult result={result} />
    });
    return (
      <div className="search-wrapper col l11">
                  <input on onChange={(e)=> this.handleSearch(e)} id="search" value={this.state.query} placeholder="Search" />
                  <button onClick={(e)=>this.handleSearchSubmit(e)} className="btn waves-effect waves-light">search</button>
                {this.state.brandedSearch.length > 0 ?
                  <div className="search-results">
                  <table>
                  <tr><th>Food Name</th><th>Calorie Count</th></tr>
                    {searchResults}
                  </table>
                  </div> : false}
          </div>


    )
  }
}

export default CalorieCounter;
