import React from 'react';
import DisplayInfo from './Pages/DisplayInfo';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckoutForm from './Components/orderComponents/CheckoutForm';
import OrderDetails from './Pages/OrderDetails';
import ConfirmationOrder from './Components/orderComponents/confirmationOrder';
import Cancel from './Components/orderComponents/Cancel';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/displayInfo/:id" element={<DisplayInfo />} />
          <Route path="/detailsForm" element={<CheckoutForm />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
          <Route path="/success" element={<ConfirmationOrder />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
