import React from 'react'
import Image from 'next/image'
import styles from './Detail.module.css'
import { useState, useEffect } from 'react';

const Detail = ({ product }) => {

  const [skuCode, setSkuCode] = useState(product.skus[0].code);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(s) {
      const url = "http://localhost:3000/api/stock-price/" + s;
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData(skuCode);

    const intervalId = setInterval(fetchData, 5000, skuCode);

    return () => clearInterval(intervalId);

  }, [skuCode]);

  function handleClick(code) {
    setSkuCode(code);
  }

  return (
    <div className={styles.detail} >
      <h2>Detail</h2>
      <Image
        src={product.image}
        width={200}
        height={300}
        alt={product.brand}
      />
      <div className={styles.brand}>
        <div className={styles.brand2} >
          <h2>{product.brand}</h2>
          <p className={styles.brandp} >
            ${(data.price / 100).toLocaleString('es-ES', { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>
      <div className={styles.originstock} >
        <p>Origin: {product.origin} | </p>
        <p>  Stock: {data.stock} </p>
      </div>
      <div>
        <h3>Description</h3>
        <p>{product.information}</p>
      </div>
      <h3 className={styles.titlesize}> Size</h3>
      <div className={styles.Size}>
        {product.skus.map((sku) => (
          <p onClick={() => handleClick(sku.code)}   key={sku.code}>{sku.name}</p>
        ))}
      </div>
      <div className={styles.buttons}>
        <button className={styles.button1}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </button>
        <button className={styles.button2}> Add to cart </button>
      </div>
    </div>
  )
}

export default Detail