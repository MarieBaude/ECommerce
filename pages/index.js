import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner
      <div>
        <h2>Title</h2>
        <p>Lorem</p>
      </div>

      <div>
        {['Product 1', 'Product 2'].map(
          (product) => product)}
      </div>
    </>
  )
}

export default Home