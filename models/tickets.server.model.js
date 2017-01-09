const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
  ticketID: Number,
  owner: String,
  issue: String,
  status: String,
  OS: String,
  solution: String,
  createdOn: {type: Date, default: Date.now}
}, {_id: false});

module.exports = mongoose.model('Tickets', TicketSchema);