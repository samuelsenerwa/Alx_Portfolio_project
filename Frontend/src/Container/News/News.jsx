import React, { useState, useEffect } from 'react';
import axios from 'axios';
import images from '../../Constants/images';
import { Preloader } from '../../Components';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHealthNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?category=health&country=us&apiKey=96d8094b9d584e4baa94603f7125144b');

        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchHealthNews();
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <section id="news" data-stellar-background-ratio="2.5">
          <div className="container">
            <div className="row">
              {/* Render the news articles */}
              {news.map((article, index) => (
                <div className="col-md-4 col-sm-6" key={index}>
                  <div className="news-thumb wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      <img src={article.urlToImage} id="img-responsive" alt="" />
                    </a>
                    <div className="news-info">
                      <span>{article.publishedAt}</span>
                      <h3>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                          {article.title}
                        </a>
                      </h3>
                      <p>{article.description}</p>
                      <div className="author border-top">
                        <img src={images.author} className="img-responsive" alt="" />
                        <div className="author-info">
                          <h5>{article.author}</h5>
                          <p>{article.source.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default News;
