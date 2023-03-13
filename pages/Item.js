import styles from './item.module.css'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import Link from 'next/link'




const Item = ({ product }) => {

  const [data, setData] = useState([]);
  const link = `${product.id}`;

  useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:3000/api/stock-price/" + product.skus[0].code;
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);

  }, []);


  return (
    <Card className={styles.productCard}>
      <Card.Title>{product.brand}</Card.Title>
      <Card.Img className={styles.productImage} variant="top" src={product.image} />
      <Card.Body className={styles.productBody}>
        <Card.Text>
          <p>
            {(data.price / 100).toLocaleString('es-ES', { minimumFractionDigits: 2 })}
          </p>
        </Card.Text>

        <Button className='btn-primary'><Link href={link} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
          </svg>
        </Link></Button>
      </Card.Body>
    </Card>
  )
}

export default Item