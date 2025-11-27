const express=require("express")
const AddStudent=require("../Controller/Studentcontroller")
const router = express.Router();

router.post("/AddStudent", AddStudent)

module.exports = router;