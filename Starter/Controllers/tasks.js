const asyncWrap = require('../MiddleWare/async')
const taskimported = require('../Model/Tasks')
const getalltasks = async (req, res) => {
    const tasks = await taskimported.find({})
    res.status(200).json({ tasks })

}

const Createtask = asyncWrap(async (req, res) => {
    const anottask = await taskimported.create(req.body)/*   ***READ THISSSSSS***** You can use try&catch method here
    When validators(Value, default,trim, etc) fails you wont see the error in postman/DB but only in your server(console)
     to change this, Try&catch will help you display the error 
     try -> await-> if error -> catch error*/
    res.status(201).json({ anottask }) // if err -> status(500).json{msg:(error) or type up short text}
}
)
const GetSingletask = asyncWrap(async (req, res) => {

    const { id: taskID } = req.params
    const task = await taskimported.findOne({ _id: taskID })
    if (task) {
        res.status(200).json({ task });
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
}       // res.status(200).json({ task })
)

const Deletetask = asyncWrap(async (req, res) => {

    const { id: taskID } = req.params
    const task = await taskimported.findByIdAndDelete({ _id: taskID })
    if (task) {
        res.status(200).json({ msg: "Deleted the task your requested for" });
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
    // res.status(200).json({ task })

}
)
const Updatetask = asyncWrap(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await taskimported.findByIdAndUpdate(
        { _id: taskID },
        req.body,
        {
            new: true, // Make sure updated task is returned
            runValidators: true
        }
    );
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    // Return the updated task
    res.status(200).json({ task });
}

)

const Edittask = asyncWrap(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await taskimported.findByIdAndUpdate(
        { _id: taskID },
        req.body,
        {
            new: true, // Ensures the updated task is returned
            runValidators: true,
            overwrite: true // Completely replaces the task if PUT is used
        }
    );
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    // Return the updated task
    res.status(200).json({ task });

}
)

module.exports = {
    getalltasks,
    Createtask, GetSingletask, Updatetask, Deletetask, Edittask
}