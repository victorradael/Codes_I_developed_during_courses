function soma(x, callback) {
    return setTimeout(() => {
        callback(null,x + 5000)
    },3000) 
    
}
// callback function
function resolveSoma (err, resultado) {
    if(err) throw err
    console.log(resultado)
}

soma(200, resolveSoma)