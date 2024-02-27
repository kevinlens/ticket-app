import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { BsMailbox } from 'react-icons/bs';

const TicketsTable = ({ tickets }) => {
  return (
    <table className='border border-slate-600 rounded-md  w-full border-separate border-spacing-2'>
      <thead>
        <tr className='bg-white'>
          <th className='border border-slate-600 px-2'>No</th>
          <th className='border border-slate-600 px-4 w-6'>Name</th>
          <th className='border border-slate-600  w-8 max-md:hidden'>Email</th>
          <th className='border border-slate-600'>Summary</th>
          <th className='border border-slate-600 px-2'>Status</th>
          <th className='border border-slate-600'>Modifications</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket, index) => (
          <tr key={ticket._id} className='h-8 bg-white'>
            <td className='border border-slate-700 text-center w-2'>
              {index + 1}
            </td>
            <td className='border border-slate-700 text-center px-2'>
              {ticket.name}
            </td>
            <td className='border border-slate-700 text-center max-md:hidden px-2'>
              {ticket.email}
            </td>
            <td className='border border-slate-700 text-center px-2'>
              {ticket.summary}
            </td>
            <td className='border border-slate-700 text-center w-3'>{ticket.status}</td>
            <td className='border border-slate-700 text-center w-2 px-2'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/ticket/reply/${ticket._id}`}>
                  <BsMailbox className='text-2xl text-green-800' />
                </Link>
                <Link to={`/ticket/details/${ticket._id}`}>
                  <BsInfoCircle className='text-2xl pt-1 text-green-800' />
                </Link>
                <Link to={`/ticket/edit/${ticket._id}`}>
                  <AiOutlineEdit className='text-2xl pt-1 text-yellow-600' />
                </Link>
                <Link to={`/ticket/delete/${ticket._id}`}>
                  <MdOutlineDelete className='text-2xl pt-1 text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TicketsTable;
