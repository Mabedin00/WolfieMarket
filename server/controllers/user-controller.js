const auth = require('../auth')
const User = require('../models/user-model')
const bcrypt = require('bcyrptjs')

registerUser = async (req, res) => {
    try {
        const { username, password, passwordVerify, firstName, lastName, email } = req.body;
        if (!username || !password || !passwordVerify || !firstName || !lastName || !email) {
            return res
                .status(400)
                .json({
                    errorMessage: "Please enter all required fields."
                });
        }
        if (password.length < 8) {
            return res
                .status(400)
                .json({
                    errorMessage: "Please enter a password of at least 8 characters."
                });
        }
        if (password !== passwordVerify) {
            return res
                .status(400)
                .json({
                    errorMessage: "Please enter the same password twice."
                });
        }
        const existingUser1 = await User.findOne({ username: username });
        if (existingUser1) {
            return res
                .status(400)
                .json({
                    errorMessage: "An account with this username already exists."
                });
        }

        const existingUser2 = await User.findOne({ email: email });
        if (existingUser2) {
            return res
                .status(400)
                .json({
                    errorMessage: "An account with this email already exists."
                });
        }

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const passHash = await bcrypt.hash(password, salt);
        const newUser = new User({
            username, passHash, firstName, lastName, email
        });
        const savedUser = await newUser.save();
        return res.status(200).json({
            success: true,
        }).send();
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
} 