const { v1: uuidv1 } = require('uuid');
const data = require('../data.json');
const setData = require('../WriteFile')


const getAll = (req, res) => {
    res.json(data);
}


const getbyId = (req, res) => {
    const id = req.params.id;
    const blog = data.filter((i) => id == i.id);

    if(!blog) return res.json("Data not found");
    
    res.json(blog);
}


const createBlog = (req, res) => {
    let blog = {
        id: uuidv1(),
        heading: req.body.heading,
        body: req.body.text
    }

    data.push(blog);

    setData(data);
    res.json("Successfully created");
}


const updateBlog = (req, res) => {
    const id = req.params.id;
    const index = data.findIndex((it) => id == it.id);

    if(index === -1) return res.json("Data not found");
    
    const updatedItem = {
        id: id,
        heading: req.body.heading,
        text: req.body.text
    }

    data[index] = updatedItem;
    
    setData(data);
    res.json("Successfuly Updated");
}


const deleteBlog = (req, res) => {
    const id = req.params.id;
    const index = data.findIndex((it) => id == it.id);

    if(index === -1) return res.json("Data not found");

    data.splice(index, 1);
    
    setData(data);
    res.json("Successfuly Deleted");
}


module.exports = {
    getAll,
    getbyId,
    createBlog,
    updateBlog,
    deleteBlog
}