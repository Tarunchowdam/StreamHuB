require('dotenv').config(); 
const express = require("express");
const cors = require("cors");
const Collection = require("./mongo"); // Ensure consistency in the model name

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is working');
});

app.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Collection.findOne({ email });

        if (user) {
            const passwordMatch = user.password === password;
            res.json(passwordMatch ? "exist" : "wrong");
        } else {
            res.status(404).json("not exist");
        }
    } catch (e) {
        res.status(500).json("error");
    }
});

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExists = await Collection.findOne({ email });

        if (userExists) {
            res.status(409).json("User already exists");
        } else {
            await Collection.insertMany([{ email, password }]);
            res.status(201).json("User registered");
        }
    } catch (e) {
        res.status(500).json("error");
    }
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
