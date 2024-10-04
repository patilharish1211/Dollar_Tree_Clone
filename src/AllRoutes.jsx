import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import AddtoCart from './Pages/AddtoCart';
import MoreChoices from './Pages/MoreChoices';
import ProductPage from './Pages/ProductPage';
import DescriptionPage from './Pages/DescriptionPage';
import Privatepage from './Pages/Privatepage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/AddtoCart" element={<AddtoCart />} />
      <Route path="/MoreChoices" element={<MoreChoices />} />
      <Route path="/Productpage" element={
           <ProductPage />
       } />
      <Route path="/descriptionpage/:id" element={<DescriptionPage />} />
    </Routes>
  );
}

export default AllRoutes;
