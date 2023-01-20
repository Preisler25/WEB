let saveToDb = (db, data)=>{
    sql = "INSERT INTO qa (`name`, `question`) VALUES ('"+data.name+"', '"+data.age+"')";
    db.query
};

module.exports = {
    saveToDb,

};