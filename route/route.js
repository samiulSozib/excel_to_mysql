const homepageRoute=require('./homepageRoute')
const questionRoute=require('./questionpageRoute')

const routes=[
    {
        path:'/my',
        handler:questionRoute
    },
    {
        path:'/question',
        handler:homepageRoute
    },{
        path:'/',
        handler:(req,res,next)=>{
            res.json('Welcome')
        }
    }
]

module.exports=(app)=>{
    routes.forEach(r=>{
        if(r.path=='/'){
            app.get(r.path,r.handler)
        }else{
            app.use(r.path,r.handler)
        }
    })
}