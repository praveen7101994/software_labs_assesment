const express = require('express');
const router = express.Router();
const Employee = require('../../models/employee');

router.get('/', (req, res) => {
    Employee.find({}).then(data => {
        res.status(200).send(data);
    })
});

router.get('/:id', (req, res) => {
    Employee.findById(req.params.id).then(emp => {
        if(!emp){
            res.status(404).send();
        }
        res.status(200).send(emp);
    }).catch((e) => {
        res.status(400).send();
    })
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const {Name, Email, Contact, Address, Role} = req.body;

    const NewEmployee = new Employee({
        Name,
        Email,
        Contact,
        Address,
        Role
    })

    NewEmployee.save().then(() => res.status(200).send({msg: 'new employee registered....!',
data: NewEmployee})).catch((err) => {
    res.status(400).send({error: 'Something went wrong registering new'})
})

});

router.delete('/:id', (req, res) => {
    console.log('delete request..', req.body)
    Employee.deleteOne({_id : req.params.id}, (err) => {
        if(err){
            return res.status(400).send(err);
        } else {
            res.status(200).send({deleted: 'employee deleted.....!'});
        }
    })
})

module.exports = router;