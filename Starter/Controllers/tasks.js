const taskimported = require('../Model/Tasks')
const getalltasks = async (req, res) => {
    try {
        const tasks = await taskimported.find({}, { name: /hrithik/i })
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })

    }
}

const Createtask = async (req, res) => {
    const anottask = await taskimported.create(req.body)/*   ***READ THISSSSSS***** You can use try&catch method here
    When validation fails you wont see the error in postman/DB but only in your server(console)
     to change this, Try&catch will help you display the error 
     try -> await-> if error -> catch error*/
    res.status(201).json({ anottask }) // if err -> status(500).json{msg:(error) or type up short text}
}

const GetSingletask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await taskimported.findOne({ _id: taskID })
        if (task) {
            res.status(200).json({ task });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
        // res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })

    }
}

const Updatetask = (req, res) => {
    res.send(`Update TASK from POST`)
}

const Deletetask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await taskimported.findByIdAndDelete({ _id: taskID })
        if (task) {
            res.status(200).json({ msg: "Deleted the task your requested for" });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
        // res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })

    }
}
module.exports = {
    getalltasks,
    Createtask, GetSingletask, Updatetask, Deletetask
}