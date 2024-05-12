import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Recipes from './components/Recipes/Recipes'
import CookingWishlist from './components/CookingWishlist/CookingWishlist'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cooking, setCooking] = useState([]);

  const handleWantCook = recipe => {
    if (!cooking.includes(recipe)) {
      const newCookingRecipe = [...cooking, recipe];
      setCooking(newCookingRecipe);
    }
    else{
      toast.warning(`This item "${recipe.recipe_name}" is already have in cooking item`)
    }
  }

  return (
    <div>
      <Header />
      <Hero />
      <div className='container mx-auto lg:my-10'>
        <div className='flex justify-center pb-5'>
          <div className='lg:w-2/4 space-y-4'>
            <h2 className='text-2xl font-bold text-center'>Our Recipes</h2>
            <p className='text-center font-light text-slate-600'>Discover a world of culinary delight with our diverse recipes featuring flavors from around the globe. Lets explore together!</p>
          </div>
        </div>

        <div className='grid lg:grid-cols-5 gap-5'>
          <Recipes handleWantCook={handleWantCook} />
          <CookingWishlist cooking={cooking} ToastContainer={ToastContainer} />
        </div>
      </div>
    </div>
  )
}

export default App
