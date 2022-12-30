import React, { useState } from 'react';

import './App.css';



import Pricingcard from './components/Pricingcard';
import Pricingcarddata from './components/Pricingcarddata';
import Lifetimepricing from './components/Lifetimepricing';
import Lifetimecarddata from './components/Lifetimecarddata';

import Homepage from './components/Pages/Homepage';

import RegisterPage from './components/Pages/RegisterPage';
import NotFoundPage from './components/Pages/NotFoundPage';


// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Route, Routes } from "react-router-dom";
import PriceList from './components/Pages/PriceList';




function App() {

  const [pricingToggle, setPricingToggle] = useState(true)


    let PricingStorage = Pricingcarddata.map( (prices) => {
        return <Pricingcard 
                key={prices.id}
                prices={prices}/>
    })



  let PricingLife = Lifetimecarddata.map( lifeprices => {
      return <Lifetimepricing key={lifeprices.id}
                          lifeprices={lifeprices}                   
      />
  })

  let cardPricing;

  if (pricingToggle) {
    cardPricing = PricingStorage
  } else {
    cardPricing = PricingLife
  }
 

  function handleCategory() {
   setPricingToggle(prevPricing => !prevPricing)
  }




  




  return (

    <div>
      
      <Routes>
      <Route path='/Squadbyte' element={ <Homepage PricingStorage={cardPricing} handleCategory={handleCategory} />} />
      <Route path='/Squadbyte/RegisterPage' element={ <RegisterPage/>} />
      <Route path='/Squadbyte/PriceList' element={ <PriceList PricingStorage={cardPricing} handleCategory={handleCategory} />} />
      <Route path='*' element={<NotFoundPage/>}/>
      
      </Routes>
      
    </div>
   
  );
}

export default App;








// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
