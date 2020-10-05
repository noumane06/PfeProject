const jwt = require("jsonwebtoken");
const cookie = require('cookie');

module.exports = (req,res,next)=>{
    try {
        const AuthCookie = cookie.parse(req.headers.cookie)
        const CookieToken = AuthCookie.auth;
        const DecodedToken = jwt.verify(CookieToken , process.env.AUTH_SECRET);
        req.AuthID = DecodedToken ;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            error : "Your not logged in"
        });
    }
};