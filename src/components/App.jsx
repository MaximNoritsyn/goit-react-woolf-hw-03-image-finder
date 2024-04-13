import css from './app.module.css';
import { SearchBar } from './search_bar/search_bar';
import { Component } from 'react';

export class App extends Component {

  state = {
    searchQuery: '',
  };

  submitSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value.trim();
    this.setState('searchQuery', searchQuery);
  }

  render() {
    return <div className={css.app}>
      <SearchBar submitSearch={this.submitSearch} />
    </div>
  };
};
