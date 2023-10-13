import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../Components/Blogs/BlogCard';
import { Container, Row, Col } from 'react-bootstrap';
import localData from './Blog.json'; // Use a different variable name for the local JSON data

const Blog = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const apiKey = 'e880eafcbc4d403c8b127539d9549ec3';

    axios
      .get('https://newsapi.org/v2/everything?q=tesla&from=2023-09-12&sortBy=publishedAt&apiKey=' + apiKey)
      .then((response) => {
        setBlogData(response.data.articles);
        console.log("blog", response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
        setBlogData(localData);
      }); // <- Add a closing curly brace here
  }, []);

  return (
    <Container>
      <Row>
        {blogData?.map((article, index) => (
          <Col key={index} sm={4}>
            <BlogCard
              source={article.source}
              author={article.author}
              title={article.title}
              description={article.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
