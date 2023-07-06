import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Preloader } from '../../Components';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHealthNews = async () => {
      try {
        const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_25812fc32ee4cffc907d4878ddf91ab590a72&category=health&language=en');

        setNews(response.data.results);
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
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      <img src={article.image_url} id="img-responsive" alt="" />
                    </a>
                    <div className="news-info">
                      <span>{article.pubDate}</span>
                      <h3>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                          {article.title}
                        </a>
                      </h3>
                      <p>{article.description}</p>
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
