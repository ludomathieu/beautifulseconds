import React, { Component } from 'react';

class Article extends Component {
  render() {
    const { title, youtubeId } = this.props;
    return(
        <article>
            <h2 className="video-title">{title}</h2>
            <div className="video-wrapper">
                <div className="video-container">
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </article>
    );
  }
}

export default Article;