import TicketSingleCard from './TicketSingleCard';
const TicketsCard = ({ tickets }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {tickets.map((ticket) => (
        <TicketSingleCard key={ticket._id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketsCard;
