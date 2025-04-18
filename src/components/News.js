import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = process.env.REACT_APP_NEWS_API_KEY;
        const sources = 'bloomberg,cnn';
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`
        );

        if (response.data.articles) {
          // Filter out articles without images or descriptions
          const validArticles = response.data.articles.filter(
            article => article.urlToImage && article.description
          );
          setArticles(validArticles);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        // If API fails, load backup news
        const backupArticles = [
          {
            source: { name: 'Bloomberg' },
            title: 'Global Markets Rally as Tech Stocks Surge',
            description: 'Technology stocks led a broad market rally as investors bet on continued growth in the sector...',
            url: 'https://www.bloomberg.com',
            urlToImage: 'https://via.placeholder.com/400x200',
            publishedAt: '2025-04-18T10:00:00Z'
          },
          {
            source: { name: 'CNN' },
            title: 'AI Developments Shape Future of Work',
            description: 'New developments in artificial intelligence are transforming how businesses operate...',
            url: 'https://www.cnn.com',
            urlToImage: 'https://via.placeholder.com/400x200',
            publishedAt: '2025-04-18T09:30:00Z'
          },
        ];
        setArticles(backupArticles);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="news-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="news-page">
      <section className="news-hero pt130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="hero-title mb-4">Latest News</h1>
              <p className="lead mb-4">Stay informed with the latest updates from trusted sources</p>
            </div>
          </div>
        </div>
      </section>

      <section className="news-content py-5">
        <div className="container">
          <div className="row">
            {articles.map((article, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="news-card">
                  {article.urlToImage && (
                    <div className="news-image">
                      <img src={article.urlToImage} alt={article.title} className="img-fluid" />
                    </div>
                  )}
                  <div className="news-body">
                    <div className="news-source">
                      <span className="badge bg-primary">{article.source.name}</span>
                      <small className="text-muted ms-2">{formatDate(article.publishedAt)}</small>
                    </div>
                    <h3 className="news-title">{article.title}</h3>
                    <p className="news-description">{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
