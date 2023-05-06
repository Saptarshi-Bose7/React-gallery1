import logo from './logo.svg';
import bgImg from './img/bgImg.jpg'
// import './App.css';
import Gallery from './Components/Gallery';

function App() {
  return (
   <div style={{backgroundImage: `url(${bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
     <h1 style={{textAlign: 'center', color: 'white',fontFamily:'Pacifico'}}>Image Gallery</h1>
     <Gallery />
   </div>
  );
}

export default App;
