const express = require('express');
const router = express.Router();

const { getalltasks, Createtask, GetSingletask, Updatetask, Deletetask, Edittask } = require('../Controllers/tasks')



router.route('/').get(getalltasks).post(Createtask)
router.route('/:id').get(GetSingletask).patch(Updatetask).delete(Deletetask).put(Edittask)
module.exports = router;