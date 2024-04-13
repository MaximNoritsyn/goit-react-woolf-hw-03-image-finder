import css from './app.module.css';
import { searchImages } from '../services/pixabay';
import { SearchBar } from './search_bar/search_bar';
import { ImageGallery } from './images/image_gallery/image_gallery';
import { Button } from './button/button';
import { Loader } from './loader/loader';
import { Component } from 'react';

export class App extends Component {

  state = {
    query: '',
    page: 1,
    images: [],
    canLoadMore: false,
    loading: false
  };

  submitSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    this.setState({
      query: query,
      page: 1,
      images: [],
    });
  }

  async loadImages() {
    this.setState({ loading: true })
    try {
      const { hits, canLoadMore } = await searchImages(this.state.query, this.state.page)
      console.log(hits)
      this.setState((prevState) => ({
        images: [...prevState.images, ...hits],
        canLoadMore: canLoadMore
      }))
    }
    catch (error) {
      console.error(error)
    }
    finally {
      this.setState({ loading: false })
    }
  }

  componentDidUpdate(_, prevState){
    if(this.state.page !== prevState.page || this.state.query!== prevState.query ){
      this.loadImages()
    }
  }

  render() {
    return <div className={css.app}>
      <SearchBar submitSearch={this.submitSearch} />
      <ImageGallery images={this.state.images} />
      <Loader visible={this.state.loading} />
      { this.state.canLoadMore && this.state.images && <Button onClick={() => this.setState((prevState) => ({ page: prevState.page + 1 }))} text="Load more" />}
    </div>
  };
};
