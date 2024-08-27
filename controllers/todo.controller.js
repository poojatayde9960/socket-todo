const asyncHandler = require("express-async-handler")
const Todo = require("../modal/Todo")

exports.createTodo = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "createTodo success" })
})
exports.readTodo = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "readTodo success", result })
})
exports.updateTodo = asyncHandler(async (req, res) => {
    const result = await Todo.findByIdAndUpdate(req.params._id, req.body)
    res.json({ message: "updateTodo success" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "deleteTodo success" })
})