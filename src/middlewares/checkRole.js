export const checkRole  = async (req, res, next) => {
    try {
        const userRole = req.role;
        console.log(userRole);
        if (userRole === 'user') {
            return res
            .status(404)
            .json({status: false, message: "Unauthorized!"})
        }
        next()
    } catch (error) {
        console.log(error);
        res.status(500).json({status: false, message: error.message})
    }    
}