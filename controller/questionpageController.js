exports.getQuestionPage=async(req,res,next)=>{
    return res.render('questionpage',{data:{}})
}

exports.submitQuestion=async(req,res,next)=>{
    try{
        let array=[];
        let current_qstn;
        for(let i=0;i<req.body.qstn_number.length;i++){
            current_qstn={}
            current_qstn['qstn_number']=req.body.qstn_number[i]
            current_qstn['qstn_section']=req.body.qstn_section[i]
            current_qstn['qstn_marks']=req.body.qstn_marks[i]
            current_qstn['qstn']=req.body.qstn[i]
            array.push(current_qstn)
        }

        return res.send(array)
    }catch(e){
        console.log(e)
    }
}