/* eslint-disable react/jsx-no-undef */

import Feature from './components/Feature'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import Dashboard from './components/Dashboard'
// import Testimonial from'./components/Testimonial'

function App() {

  return (
   <>
   <Header />
      <Hero />
      <Feature />
      <Card />
      {/* <Testimonial /> */}
      <Dashboard />
   </>
  )
}

export default App
