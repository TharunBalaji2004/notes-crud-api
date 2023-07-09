const noteModel = require("../models/note")

const createNote = async (req,res) => {
    //console.log("USER ID: "+req.userId)
    const {title, description} = req.body

    const newNote = new noteModel({
        title: title,
        description: description,
        userId: req.userId
    })

    try {
        await newNote.save()
        res.status(201).json(newNote)
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }

}

const updateNote = async (req,res) => {
    const noteId = req.params.id
    const {title, description} = req.body

    const newNote = {
        title: title,
        description: description,
        userId: req.userId
    }

    try {
        await noteModel.findByIdAndUpdate(noteId, newNote, {new: true})
        res.status(201).json(newNote)
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
}

const deleteNote = async (req,res) => {
    const noteId = req.params.id

    try {
        const deletedNote = await noteModel.findByIdAndRemove(noteId)
        res.status(202).json(deletedNote)
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
}

const getNotes = async (req,res) => {
    
    try {
        const notes = await noteModel.find({userId: req.userId})
        res.status(200).json(notes)
    } catch(error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})      
    }

}

module.exports = {createNote, updateNote, deleteNote, getNotes}