const router=require('express').Router()
const {getQuestionPage,submitQuestion}=require('../controller/questionpageController')

router.get('/question-details',getQuestionPage)

router.post('/question-upload',submitQuestion)

module.exports=router