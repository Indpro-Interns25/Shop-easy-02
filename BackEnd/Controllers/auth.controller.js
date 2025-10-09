async function loginController(req, res) {
    const {email, password} = req.body;

    res.status(201).json({
        msg:"User LoggedIn Successfully",
        email,
        password
    })
}

async function registerController(req, res) {
    const {email, password, username, phonenumber, city} = req.body;

    res.status(201).json({
        msg:"User Registered Successfully",
        email, password, username, phonenumber, city
    })
}

module.exports = {loginController, registerController};