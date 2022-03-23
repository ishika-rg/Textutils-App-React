//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './components/styles.css'


function App() {

 // const [dark, setMode] = useState(false)
  return (
    <>

    <Navbar title ="TEXTUTILS" ></Navbar>
    <div className= "container1 py-5">
       <TextForm heading = "Enter the text to analyze below!"></TextForm>
    </div>


    </>
  );
}

export default App;
