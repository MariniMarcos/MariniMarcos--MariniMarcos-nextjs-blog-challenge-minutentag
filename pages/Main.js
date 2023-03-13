import React from 'react'
import ProductListingPage from './ProductListingPage'
import Form from './Form'
import styles from './Main.module.css'
import Image from 'next/image'

const Main = () => {
  return (
    <main>
      <div className={styles.welcome}>
        <h5>Hi Mr.Michael,</h5>
        <h2>Welcome Back!</h2>
      </div>
      <div className={styles.search} >
      <Form/>
      </div>
      <div className={styles.drinkcategory}>
        <h4>Drink Category</h4>
        <ul className={styles.drink}>
          <li>
            <a href="#">All</a>
          </li>
          <li>
          <Image 
          src="/Beer.png" 
          width="25"
          height="25"
          alt="beer"
          />
            <a href="#">Beer</a>
          </li>
          <li>
          <Image 
          src="/Wine-glass.png"
          width="25"
          height="25"
          alt="wine"
          />
            <a href="#">Wine</a>
          </li>
        </ul>
      </div>
      <div className={styles.ProductListingPage}>  
        <h4>Populer</h4>
        <ProductListingPage />
      </div>
    </main>
  )
}

export default Main