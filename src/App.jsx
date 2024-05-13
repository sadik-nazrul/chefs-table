import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Recipes from './components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [wantCook, setWantCook] = useState([]);

  const handleWantCook = recipe => {
    if (!wantCook.includes(recipe)) {
      const newWantCookRecipe = [...wantCook, recipe];
      setWantCook(newWantCookRecipe);
    }
    else {
      toast.warning(`This item "${recipe.recipe_name}" is already have in wantCook item`)
    }
  }

  const [currentCooking, setCurrentCooking] = useState([]);
  const [prePareTime, setPrpareTime] = useState(0);
  const [calori, setCalori] = useState(0);

  // const [removeWant, setRemoveWant] = useState([])


  const handlePrepareToCurrentCooking = (cookinItem, prePareTime, calories, id) => {
    const newCurrentCook = [...currentCooking, cookinItem];
    setCurrentCooking(newCurrentCook);
    const remainingWatToCook = wantCook.filter(wantC => wantC.recipe_id !== id);
    setWantCook(remainingWatToCook)
    timeCal(prePareTime, calories)
  }

  const timeCal = (prptime, calories) => {
    setPrpareTime(prePareTime + prptime);
    setCalori(calori + calories)
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
          <Recipes
            handleWantCook={handleWantCook}
          />

          <Sidebar
            wantCook={wantCook}
            ToastContainer={ToastContainer}
            currentCooking={currentCooking}
            handlePrepareToCurrentCooking={handlePrepareToCurrentCooking}
            prePareTime={prePareTime}
            calori={calori}
          />
        </div>
      </div>
    </div>
  )
}

export default App
