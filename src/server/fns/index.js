exports.queryOneInputValue = function (pool, query, value) {
    return new Promise ((resolve, reject) => {
        try{

            pool.query(query, [value], (err, rows) => {
                if (err){
                    return reject(err)
                }else {
                    return resolve(rows)
                }
            })

        } catch (err) {
            return (err)
        }
    })
}

exports.queryNoInputValue = function(pool, query){
    return new Promise ((resolve, reject) => {
        try{
            pool.query(query, (err, rows) => {
                if (err) return reject(err)
                else return resolve(rows)
            })
        }catch (e){
            return e
        }
    })
}

exports.loginData = function(user){
    user.userData = JSON.parse(user.userData)
    user.pass = ''
    return user
}


