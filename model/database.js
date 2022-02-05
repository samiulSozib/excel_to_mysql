const {Sequelize,DataTypes}=require('sequelize')

const sequelize=new Sequelize('rajib_vai','root','',{
    host:'localhost',
    dialect:'mysql',
    pool:{max:5,min:0,idle:10000}
});

sequelize.authenticate()
    .then(()=>{
        console.log("Database connect success")
    })
    .catch(err=>{
        console.log("error",+err)
    });

const db={}
db.Sequelize=Sequelize;
db.sequelize=sequelize

db.sequelize.sync({force:false})
    .then(()=>{
        console.log('sync database')
    });

db.qstn_attr=require('./qstn_attr')(sequelize,DataTypes)
db.qstn=require('./qstn')(sequelize,DataTypes)

module.exports=db
