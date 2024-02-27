import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import TicketsCard from '../components/home/TicketsCard';
import TicketsTable from '../components/home/TicketsTable';
const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://ticket-app-backend-psi.vercel.app/tickets')
      .then((response) => {
        setTickets(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


  return (
    <div className='p-4'>
      <div className='flex justify-between'>
        <div>
          <button
            onClick={() => setShowType('table')}
            className='bg-sky-300 hover:bg-sky-600 px-4 py-1 mr-4 rounded-lg'
          >
            Table Layout
          </button>
          <button
            onClick={() => setShowType('card')}
            className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          >
            Card Layout
          </button>
        </div>
        <div className='flex items-center'>
          <h2 className='text-xl'>Create Ticket</h2>
          <Link to='/'>
            <MdOutlineAddBox className='text-sky-800 ml-2 text-4xl' />
          </Link>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl my-8'>Tickets Dashboard</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <TicketsTable tickets={tickets} />
      ) : (
        <TicketsCard tickets={tickets} />
      )}
    </div>
  );
};

export default Home;
