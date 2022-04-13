const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   budget: {
      type: String
   },
   phoneNumber: {
      type: Number
   }
}, {
   collection: 'user'
})

module.exports = mongoose.model('user', Employee)