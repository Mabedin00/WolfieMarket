const { verify } = require('crypto')
const jwt = require('jsonwebtoken')

function authManager() {
    verify = (req, res, next) => {
        try {
            const token = req.cookies.token;
            if (!token) {
                return res.status(401).json({
                    loggedIn: false,
                    user: null,
                    errorMessage: 'Unauthorized'
                });
            }

            const verified = jwt.verify(token, process.env.JWT_SECRET);
            req.userId = verified.userId;

            next();
        } catch (err) {
            console.log(err);
            return req.status(401).json({
                errorMessage: 'Unauthorized'
            });
        }
    }
}