const languageModel = require('../models/Language');


const index = async (req, res) => {
    try{
        const language = await languageModel.find();
        return res.status(200).json(language);
    }catch (error) {
        return res.status(400).json(error);
    }
};
// To create new languages
const store = async (req,res) => {
    console.log(req.body);
    
    try{
        const language = await languageModel.create(req.body);
        return res.status(201).json(language)  

    }catch (error) {
        return res.status(400).json(error);
    }
};



module.exports =  {
    store,index
}


