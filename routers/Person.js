const Express  = require("express");
const router = Express.Router();
const personModel = require("../Model/PersonModel");



router.get("/",((req, res) => {
   res.send("<h1>Inside /person</h1>");
}));
// router.get("/:name",((req, res) => {
//     res.send(`<h1>Inside /person/${req.params.name}</h1>`);
// }));

//GETTING everyPerson
router.get("/getperson", (req, res) => {
    const person = personModel.find();

    person.find()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({
             message : err
            });
        });
});
//getting specific person only , not sure why but anything other than :id isn't working.
router.get("/getperson/:id" , ((req, res) => {
    personModel.findById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json({
            message : err
        }));
}));

//Deleting
router.delete("/deleteperson/:id", ((req, res) => {
    personModel.remove({_id:req.params.id})
        .then(res.json(data =>{
            res.json(data);
        }))
        .catch(err => res.status(500).json({message:err}));
}));



//Adding a new Person
router.post("/newperson",((req, res) => {
    const newPerson = new personModel({
        name : req.body.name,
        language : req.body.language
    });

    newPerson.save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })

}));

//Updating a Person

router.patch("/updatepersonlang/:id",(req, res) => {
    personModel.updateOne({
        _id : req.params.id
    },{$set:{
        language : req.body.language
        }})
        .then(data =>{
            res.status(200).json(data);
        })
        .catch(err => res.status(404).json({message:err}));
});



module.exports = router;
