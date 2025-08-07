

const mongoose = require('mongoose');
const Blog = require('./models/Blog');

mongoose.connect('mongodb+srv://<adhanaanjali6>:<BlogApp@123>@cluster0.mongodb.net/blog-app?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});

const seedPosts = [
  {
    title: "Introduction to React",
    author: "Anjali",
    content: "React is a JavaScript library for building user interfaces."
  },
  {
    title: "Getting Started with MongoDB",
    author: "John",
    content: "MongoDB is a NoSQL database that stores data in JSON-like format."
  },
  {
    title: "Node.js and Express",
    author: "Ravi",
    content: "Node.js allows you to run JavaScript on the server side."
  }
];

async function seedDB() {
  await Blog.deleteMany({});
  await Blog.insertMany(seedPosts);
  console.log("Database seeded!");
  mongoose.connection.close();
}

seedDB();
