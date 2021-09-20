import React, {useState , useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/Homepage';
import SingleProduct from './components/SingleProduct';
import About from './components/About';

function App() {

  const [data , setData] = useState([]);

 useEffect(() => {
    const fetchData = async() => {
      const x = await axios.get('https://api.tvmaze.com/search/shows?q=all');
      console.log(x.data);
     setData(x.data);
    };

    fetchData();
 }, [])

  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path='/'>
        <Homepage data={data} />
      </Route>
      <Route exact path='/about'> <About /> </Route>
      <Route
            exact
            path="/show/:id"
            children={<SingleProduct data={data} />}
          />
    </Switch>
    </Router>   
  );
}

export default App;
