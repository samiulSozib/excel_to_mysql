const route=require('express').Router()
const {getHomePage,postHomePage}=require('../controller/homepageController')
const upload=require('../middleware/upload')

route.get('/',getHomePage)
route.post('/',upload.single('qstn'),postHomePage)

module.exports=route