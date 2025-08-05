// // require('dotenv').config();

// // const mongoose = require('mongoose');

// // // Connect to MongoDB
// // mongoose.connect(process.env.MONGODB_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // })
// // .then(() => {
// //     console.log('Database Connected');
// // })
// // .catch((error) => {
// //     console.error('Database connection error:', error);
// // });

// // // Define schema
// // const mongoSchema = new mongoose.Schema({
// //     email: {
// //         type: String,
// //         required: true,
// //         unique: true, // Ensure email is unique
// //     },
// //     password: {
// //         type: String,
// //         required: true,
// //     }
// // });

// // // Create model
// // const Collection = mongoose.model('User', mongoSchema);

// // module.exports = Collection;


// require('dotenv').config(); // Load environment variables

// const mongoose = require('mongoose');

// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log('Database Connected');
// })
// .catch((error) => {
//     console.error('Database connection error:', error);
// });

// // Define schema
// const mongoSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     }
// });

// // Create model
// const Collection = mongoose.model('User', mongoSchema);

// module.exports = Collection;



require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Database Connected');
})
.catch((error) => {
    console.error('Database connection error:', error);
});

// Define schema
const mongoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

// Create model
const Collection = mongoose.model('User', mongoSchema);

module.exports = Collection;

