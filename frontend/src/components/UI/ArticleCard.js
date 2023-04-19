import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ArticleCard(props) {
  return (
    <Card className='w-75 mx-auto'>
      <Card.Body>
        <Card.Title>{props.article.title}</Card.Title>
        <Card.Text>
          {props.article.subtitle}
        </Card.Text>
        <Link to={`/article-detail/${props.article.id}`} className='btn btn-primary'>More info</Link>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;