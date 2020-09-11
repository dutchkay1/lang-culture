const transModel = require('../models/Translation');

const transGet = async (req, res) => {
    try{
        const translation = await transModel.find();
        return res.status(200).json(translation);
    }catch (error) {
        return res.status(400).json(error);
    }
};


// To create new languages
const transFetch = async (req,res, next) => {
    console.log(req.body);
    
    try{
        const translation = await transModel.create(req.body);
        return res.status(201).json(translation)  

    }catch (error) {
        next(error)
        return res.status(400).json(error);
    }
};


// To update languages
const transUpdate = async (req, res) =>{
    try{
        let id = req.params.id
        const translation = await transModel.findByIdAndUpdate(id, req.body,{
            new: true,
            runValidators: false
        } );
          
        return res.status(200).json(translation);
    }catch (error) {
        return res.status(400).json(error);
    }
};


// To delete languages
const transDelete = async (req, res) => {
    try{
        const translation = await transModel.findOneAndDelete({_id: req.params.id });
        return res.status(200).json(translation);
    }catch (eror) {
        return res.status(400).json(error);
    }
};



module.exports = {
    transGet, transFetch, transUpdate, transDelete
}