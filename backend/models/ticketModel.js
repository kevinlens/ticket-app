import mongoose from 'mongoose';

const ticketSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    status: {
      type: Object,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Ticket = mongoose.model('Ticket', ticketSchema);
