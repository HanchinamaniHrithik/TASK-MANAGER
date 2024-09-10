const asyncWrap = (func)=>{

    return(req,res,next)=>{
        try {
            func(req,res,next)
        } catch (error) {
            next(error)
        }
    }
}

module.exports= asyncWrap