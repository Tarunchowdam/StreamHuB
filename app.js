require('dotenv').config(); 
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const Collection = require("./mongo");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is working');
});

app.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Collection.findOne({ email });

        if (!user) {
            return res.status(404).json("not exist");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        res.json(passwordMatch ? "exist" : "wrong");
    } catch (e) {
        res.status(500).json("error");
    }
});

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExists = await Collection.findOne({ email });

        if (userExists) {
            return res.status(409).json("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await Collection.insertMany([{ email, password: hashedPassword }]);
        res.status(201).json("User registered");
    } catch (e) {
        res.status(500).json("error");
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
