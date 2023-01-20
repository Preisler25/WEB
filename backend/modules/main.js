let saveToDb = (db, data)=>{
    sql = "INSERT INTO qa (`name`, `age`) VALUES ('"+data.name+"', '"+data.age+"')";
};

module.exports = {
    saveToDb,

};