import css from './app.module.css';
import { searchImages } from '../services/pixabay';
import { SearchBar } from './search_bar/search_bar';
import { Component } from 'react';

export class App extends Component {

  state = {
    query: '',
    page: 1,
  };

  submitSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    this.setState({
      query: query,
      page: 1
    });
  }

  async loadImages(){
    const hits = await searchImages(this.state.query, this.state.page)
    console.log(hits)
  }

  componentDidUpdate(_, prevState){
    if(this.state.page !== prevState.page || this.state.query!== prevState.query ){
      this.loadImages()
    }
  }

  render() {
    return <div className={css.app}>
      <SearchBar submitSearch={this.submitSearch} />
    </div>
  };
};
