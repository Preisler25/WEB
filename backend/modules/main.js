let saveToDb = (db, data)=>{
    sql = "INSERT INTO `table` (`name`, `age`) VALUES ('"+data.name+"', '"+data.age+"')";
};

module.exports = {
    saveToDb,

};