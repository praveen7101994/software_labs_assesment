const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String
    },
    Contact: {
        type : Number
    },
    Address: {
        type: String
    },
    Role: {
        type: String
    }
});

module.exports = Employee = mongoose.model('Employee', EmployeeSchema);