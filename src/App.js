import { CategoriesBar } from './Components/CategoriesBar';
import { NavigationBar } from './Components/NavigationBar';
import { Slider } from './Components/Slider';
import './styles/homePage.css';

function App() {
  return (
    <div className="">
      <NavigationBar />
      <div className='mx-4 mb-5' >
        <CategoriesBar />
        <CategoriesBar image={true} />
        <Slider />
      </div>
    </div>
  );
}

export default App;
