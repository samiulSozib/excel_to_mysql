
module.exports=(sequelize,DataTypes)=>{
    const Qstn=sequelize.define('Questions',{
        qstn_attr_id:{
            type:DataTypes.INTEGER
        },
        qstn_number:{
            type:DataTypes.INTEGER
        },
        qstn_section:{
            type:DataTypes.STRING
        },
        qstn_marks:{
            type:DataTypes.INTEGER
        },
        qstn:{
            type:DataTypes.STRING
        }
    },{
        timestamps:true
    })
    return Qstn
}