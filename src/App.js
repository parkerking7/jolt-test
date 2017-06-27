import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './Card-List.js';
import SearchBar from "./SearchBar.js"
import star from './images/star.svg';
import wars from './images/wars.svg';

class App extends Component {
    constructor(props){
        super(props);

        this.state={
            chars: [],
            amount:10
        };
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount (){
            return axios.get('http://localhost:3008/people/?_limit='+ this.state.amount)
                .then((response)=>{
                        let chars = response.data;
                        chars.map((char)=> {
                            return axios.get('http://localhost:3008/planets/' + char.homeworld)
                                .then((response) => {
                                });
                        });
                    this.setState( {chars} );
            })
        }
    loadMore(){
        let amount = this.state.amount + 10;
        this.setState({amount});
        console.log(this.state);
    }




  render() {
    return (
      <div className='content'>
        <div className='logo'>
          <img src={star} alt="star-logo" />
          <span className='interview-text'>The Interview</span>
          <img src={wars} alt="wars-logo" />
        </div>
        <SearchBar />
        <CardList cards={this.state.chars} />
          <button onClick = {event => this.loadMore()}>Load More</button>
      </div>
    );
  }
}

export default App;
