import NavbarComponent from "./components/Header/NavbarComponent";
import Recipeis from "./components/Recipeis/Recipeis";

const App = () => {
  return (
    <div className="container mx-auto">
      <NavbarComponent />
      <div className="grid lg:grid-cols-3 gap-10 lg:py-10 p-5">
        <Recipeis />
        <h2>Menu</h2>
      </div>
    </div>
  )
}
export default App;