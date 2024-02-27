import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditTicket from './pages/EditTicket';
import CreateTicket from './pages/CreateTicket';
import ShowTicket from './pages/ShowTicket';
import DeleteTicket from './pages/DeleteTicket';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/ticket/edit/:id' element={<EditTicket />} />
      <Route path='/ticket/create' element={<CreateTicket />} />
      <Route path='/ticket/details/:id' element={<ShowTicket />} />
      <Route path='/ticket/edit/:id' element={<EditTicket />} />
      <Route path='/ticket/delete/:id' element={<DeleteTicket />} />
    </Routes>
  );
};

export default App;
