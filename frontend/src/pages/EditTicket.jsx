import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { Dropdown } from 'primereact/dropdown';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditTicket = () => {
  const [status, setStatus] = useState({ name: 'Open', code: 1 });
  const statuses = [
    { name: 'Open', code: 1 },
    { name: 'In Progress', code: 2 },
    { name: 'Resolved', code: 3 },
  ];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://ticket-app-backend-psi.vercel.app/tickets/${id}`)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setSummary(response.data.summary);
        setStatus(response.data.status);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      });
  }, []);

  const handleEditTicket = () => {
    const data = {
      name,
      email,
      summary,
      status,
    };
    console.log(data);
    setLoading(true);
    axios
      .put(`https://ticket-app-backend-psi.vercel.app/tickets/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Ticket Successfully Edited', { variant: 'success' });
        navigate('/ticket/create');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Ticket</h1>
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
          <label className='text-xl mr-4 text-gray-500'>Summary</label>
          <textarea
            type='text'
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full'
          />
        </div>

        <h1 className='m-auto'>Status</h1>
        <Dropdown
          value={status}
          onChange={(e) => setStatus(e.value)}
          options={statuses}
          optionLabel='name'
          placeholder='Unknown Status'
          className='w-38 border-2 border-cyan-400 m-auto'
        />

        <button className='p-2 bg-sky-300 m-8' onClick={handleEditTicket}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditTicket;
