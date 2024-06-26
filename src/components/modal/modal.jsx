import css from './modal.module.css';
import { Component } from 'react';

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.removeModalImage();
        }
    }

    handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.removeModalImage();
        }
    }

    render() {
        return <div className={css.Overlay} onClick={this.handleBackdropClick}>
            <div className={css.Modal}>
                <img src={this.props.largeImageURL} alt={this.props.tags} />
            </div>
        </div>
    }
}