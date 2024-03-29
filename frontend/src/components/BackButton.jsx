import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/ticket/create' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-sky-800 text-white px-8 py-4 rounded-lg w-fit'
      >
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  );
};

export default BackButton;
