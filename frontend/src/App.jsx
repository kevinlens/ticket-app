import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditTicket from './pages/EditTicket';
import CreateTicket from './pages/CreateTicket';
import ShowTicket from './pages/ShowTicket';
import DeleteTicket from './pages/DeleteTicket';
import ReplyToTicket from './pages/ReplyToTicket'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<CreateTicket />}></Route>
      <Route path='/ticket/create' element={<Home />} />
      <Route path='/ticket/details/:id' element={<ShowTicket />} />
      <Route path='/ticket/reply/:id' element={<ReplyToTicket />} />
      <Route path='/ticket/edit/:id' element={<EditTicket />} />
      <Route path='/ticket/delete/:id' element={<DeleteTicket />} />
    </Routes>
  );
};

export default App;
