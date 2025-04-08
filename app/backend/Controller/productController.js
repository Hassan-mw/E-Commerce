

exports.getAllProducts = async (req,res,next) => {
    console.log('🤠🤠🤠🤠🤠 getAllProducts controller hit!');
  
    try {
      res.status(200).json({
        status: 'success',
        data: [], // you can put your products array here
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong!',
      });
    }
  };
  