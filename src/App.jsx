import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <div>
      <Header />
      <Hero />
      <div className='grid lg:grid-cols-3 container mx-auto lg:my-10'>
        <Recipes />
      </div>
    </div>
  )
}

export default App
