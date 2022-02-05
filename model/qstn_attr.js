
module.exports=(sequelize,DataTypes)=>{
    const Qstn_attr=sequelize.define('question_attr',{
        type:{
            type:DataTypes.STRING
        },
        year:{
            type:DataTypes.STRING
        },
        semester:{
            type:DataTypes.STRING
        },
        departmen:{
            type:DataTypes.STRING
        },
        course_title:{
            type:DataTypes.STRING
        },
        course_code:{
            type:DataTypes.STRING
        },
        full_marks:{
            type:DataTypes.INTEGER
        }
    },{
        timestamps:true
    })
    return Qstn_attr
}