class CatchError {
constructor(res,error){
    res.status(500).json({
        status:'fail',
        message:error.message
    })
}

}

module.exports=CatchError