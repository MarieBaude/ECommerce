import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner
      <div className='products-heading'>
        <h2>Title</h2>
        <p>Lorem</p>
      </div>

      <div className='products-container'>
        {['Product 1', 'Product 2'].map(
          (product) => product)}
      </div>

      Footer
    </>
  )
}

export default Home