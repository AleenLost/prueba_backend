const {Sequelize} = require('sequelize');
const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST } = require('./config');


const sequelize=new Sequelize(DATABASE_NAME,DATABASE_USER,DATABASE_PASSWORD,{
    host: DATABASE_HOST,
    dialect: "mysql"
});

(async()=>{
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Conexion establecida con exito')
    } catch (error) {
        console.log('No se logro la conexion')
    }

})();

module.exports=sequelize

