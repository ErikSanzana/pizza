import React from 'react';
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';



function PizzaCard({ pizza, showDescription }) {
  return (
    <Card>
      <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        {showDescription && <Card.Text>{pizza.desc}</Card.Text>}
        <Card.Text>Ingredients:</Card.Text>
        <ul>
          {pizza.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <Link to={`/pizza/${pizza.id}`}> 
          <Button variant="info" className="mr-2">Ver más</Button>
        </Link>
        <Card.Text>Price: ${pizza.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PizzaCard;

/* destructura cada pizza  showDescription a true cuando quiera utilizar la descripcion asi no hago tantas cartas*/