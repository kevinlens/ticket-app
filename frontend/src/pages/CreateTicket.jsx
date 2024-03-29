import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateTicket = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const status = 'Open'
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveTicket = () => {
    const data = {
      name,
      email,
      summary,
      status,
    };
    setLoading(true);
    axios
      .post('https://ticket-app-backend-psi.vercel.app/tickets', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Ticket Created', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <Link
        to={'/ticket/create'}
        className='bg-sky-800 text-white px-8 py-4 rounded-lg w-fit'
      >
        Admin Login
      </Link>
      <h1 className='text-3xl my-4 text-center'>New Ticket</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Summary of Issue</label>
          <textarea
            type='text'
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveTicket}>
          Create Ticket
        </button>
      </div>
    </div>
  );
};

export default CreateTicket;
