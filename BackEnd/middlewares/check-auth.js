const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token , "secret");
        req.userData = decoded ;
        if (req.query.userid  !== decoded.userId) {
            return res.status(403).json({
                error : "You can only acces your own profile"
            });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            error : "Auth failed"
        });
    }
};