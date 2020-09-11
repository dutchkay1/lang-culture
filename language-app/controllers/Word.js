const wordModel = require('../models/Word');


const wordGet = async (req, res) => {
    try{
        const word = await wordModel.find();
        return res.status(200).json(word);
    }catch (error) {
        return res.status(400).json(error);
    }
};

// To create new languages
const wordFetch = async (req,res) => {
    console.log(req.body);
    
    try{
        const word = await wordModel.create(req.body);
        return res.status(201).json(word)  

    }catch (error) {
        return res.status(400).json(error);
    }
};


// To update languages
const wordUpdate = async (req, res) =>{
    try{
        let id = req.params.id
        const word = await wordModel.findByIdAndUpdate(id, req.body,{
            new: true,
            runValidators: false
        } );
          
        return res.status(200).json(word);
    }catch (error) {
        return res.status(400).json(error);
    }
};


// To delete languages
const wordDelete = async (req, res) => {
    try{
        const word = await wordModel.findOneAndDelete({_id: req.params.id });
        return res.status(200).json(word);
    }catch (eror) {
        return res.status(400).json(error);
    }
};



module.exports = { 
    wordGet, wordFetch, wordUpdate, wordDelete
}