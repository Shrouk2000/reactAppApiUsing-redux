import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slice/cartSlice';

function Cards({ id, title, description, imgSrc }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevents the card click event from firing
    console.log('Dispatching addToCart action');
    dispatch(addToCart()); // Dispatch the addToCart action
  };

  return (
    <Card
      style={{ width: '20rem', cursor: 'pointer', margin: '10px', marginTop: 20, border: 'none' }}
      onClick={handleCardClick}
      className="mb-4"
    >
      <Card.Img style={{ width: 200, height: 200, margin: 'auto' }} variant="top" src={imgSrc} alt={title} />
      <Card.Body>
        <Card.Title style={{ height: '60px' }}>{title}</Card.Title>
        <Card.Text style={{ overflow: 'hidden', height: '50px' }}>{description}</Card.Text>
        <Button variant="primary" onClick={(e) => { e.stopPropagation(); navigate(`/product/${id}`); }}>
          View Details
        </Button>
        <Button variant="success" className="m-2" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
