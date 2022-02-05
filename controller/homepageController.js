
const readXlsxFile=require("read-excel-file/node")

exports.getHomePage=async(req,res,next)=>{
    return res.render('homepage')
}

exports.postHomePage=async(req,res,next)=>{
    //console.log(req.body)
    try{
        if(req.file==undefined){
            return res.send("Please upload excel file")
        }
        let path='public/uploads/'+req.file.filename
        
        readXlsxFile(path).then((rows)=>{
            rows.shift();
            let info=[]
            rows.forEach((row)=>{
                let data={
                    qstn_number:row[0],
                    qstn_section:row[1],
                    qstn_marks:row[2],
                    qstn:row[3]
                }
                info.push(data)
            })
            return res.render('questionpage',{data:info})
        })
        
    }catch(e){
        console.log(e)
        res.send({
            message:"file upload fail"+req.file.originalname
        })
    }
    
}