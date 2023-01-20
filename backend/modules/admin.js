let test = (data) => {
    if (data.username === 'admin' && data.password === 'admin') {
        return true
    } else {
        return false
    }
}


module.exports = {
    test,
};