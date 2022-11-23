import React from 'react'

import Head from 'next/head';
import Navbar from './Navbar';

function Layout() {
  return (
    <div>
      <Head>
        <title>Keyboard Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
    </div>
  )
}

export default Layout