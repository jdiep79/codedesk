const Tickets = require('../models/tickets.server.model.js');

const create = (req, res) => {
  const entry = new Tickets({
    ticketID: req.body.ticketID,
    owner: req.body.owner,
    issue: req.body.issue,
    status: req.body.status,
    OS: req.body.OS,
    solution: req.body.solution
  });
  
  entry.save();
  res.redirect(301, '/');
};

module.exports = {
  create: create
};
