exports.userRegister = (req, res) => {
    try {
        const { name, email, password, dob } = req.body;
        const newUser = {
            name, email, password, dob
        }
        res.status(201).json({message: 'user created', newUser})
    } catch (error) {
        res.json({message: error.message})
    }
}

exports.userLogin = (req, res) => {
    try {
        const { email, password } = req.body;
        if(email === 'matiur021@gmail.com' && password === 'matiur1122') {
            res.send('user login in successfully')
        } else [
            res.send('Enter your valid detils to login')
        ]
        
    } catch (error) {
        console.log(error)
    }
}