import express from 'express';
const router = express.Router();

import { Ticket } from '../models/ticketModel.js'

// SAVE/CREATE NEW TICKET
router.post('/', async (request, response) => {
  try {
    if (!request.body.name || !request.body.email || !request.body.summary) {
      return response.status(400).send({
        message: 'Send all required fields: name, email, summary',
      });
    }
    const newTicket = {
      name: request.body.name,
      email: request.body.email,
      summary: request.body.summary,
    };
    const ticket = await Ticket.create(newTicket);

    return response.status(201).send(ticket);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// RETRIEVE ALL TICKETS
router.get('/', async (request, response) => {
  try {
    const tickets = await Ticket.find({});

    return response.status(200).json({
      count: tickets.length,
      data: tickets,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// RETRIEVE TICKET BY ID
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const ticket = await Ticket.findById(id);

    return response.status(200).json(ticket);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// UPDATE TICKET
router.put('/:id', async (request, response) => {
  try {
    if (!request.body.name || !request.body.email || !request.body.summary) {
      return response.status(400).send({
        message: 'Send all required fields: name, email, summary',
      });
    }
    const { id } = request.params;
    const result = await Ticket.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: 'Ticket not found' });
    }
    return response.status(200).send({ message: 'Ticket Updated' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// DELETE TICKET
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Ticket.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ message: 'Ticket not found' });
    }
    return response.status(200).send({ message: 'Ticket Deleted' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;