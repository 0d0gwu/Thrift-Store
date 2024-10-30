const User = require('../models/Users.js'); 
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    const { username, password, action } = req.body;

    try {
        if (action === 'register') {
            const hashedPassword = await bcrypt.hash(password, 10);
            await User.create({ username, password: hashedPassword });
            res.redirect('/'); // Redirect to home after registration
        } else if (action === 'login') {
            const user = await User.findOne({ username });

            // Check if user exists
            if (!user) {
                return res.status(401).send('Invalid username or password'); // User not found
            }

            // Compare passwords
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                console.log('User logged in successfully');
                req.session.userId = user._id
                res.redirect('/'); // Redirect to home after successful login
            } else {
                res.status(401).send('Invalid username or password'); // Password mismatch
            }
        }
    } catch (error) { 
        console.error(error);
        res.status(500).send('Internal Server Error'); // Handle server error
    }
};
