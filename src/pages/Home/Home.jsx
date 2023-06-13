import React from 'react'

const setListProductCreator = (payload) => {
  return { 
    type: 'ProductSlice/setListProduct',
    payload,
  }
}
function Home() {
  return (
    <div>Home</div>
  )
}

export default Home