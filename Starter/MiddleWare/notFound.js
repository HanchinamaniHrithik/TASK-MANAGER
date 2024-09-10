const notFound = (req,res)=>{
    res.status(404).send('No route exists in this path')
}

module.exports = notFound