exports.queryOneValue = function (pool, query, value) {
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


