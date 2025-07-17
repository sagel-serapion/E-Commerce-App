
import './App.css';


import Header from "./components/header/Header";
import Home from './components/Homepage/Homepage';
import DetailView from './components/details/DetailView';
import {Box} from "@mui/material";

import Cart from './components/cart/Cart';
import Dataprovider from './context/DataProvider';

import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <Dataprovider>
      <BrowserRouter>
      <Header />
      <Box style ={{ marginTop: 54 }}>
        <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/product/:id' element={ <DetailView />} />
        <Route path='/cart' element={ <Cart />} />
        </Routes>
      </Box>
      </BrowserRouter>
    </Dataprovider>
  );
}

export default App;
