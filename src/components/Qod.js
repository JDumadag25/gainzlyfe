import React from 'react';

class Qod extends React.Component {
  state = {
    quotes: [],
    author: ''
  }

  componentDidMount(){
    fetch('http://quotes.rest/qod.json').then(res => res.json())
    .then(quotes => this.setState({
          quotes: quotes.contents.quotes[0].quote,
          author: quotes.contents.quotes[0].author
    }));
  }

  render(){
    return (


          <blockquote className="center">
            <h5 className="header col s12 light">{this.state.quotes}</h5>
             <h5 className="header col s12 light">-{this.state.author}</h5>
          </blockquote>


    )
  }
}

export default Qod;
