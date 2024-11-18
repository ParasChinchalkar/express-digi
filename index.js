import express from 'express'; // Importing the Express library
const app = express(); // Initializing an Express application
const port = 3000; // Defining the port on which the server will run

app.use(express.json()); // Middleware to parse JSON request bodies

let teaData = []; // Array to store tea data
let nextID = 1; // Variable to generate unique IDs for each tea

// POST endpoint to add a new tea
app.post('/teas', (req, res) => {
  const { name, price } = req.body; // Destructuring name and price from the request body
  const newTea = { id: nextID++, name, price }; // Creating a new tea object with a unique ID
  teaData.push(newTea); // Adding the new tea to the teaData array
  res.status(201).send(newTea); // Sending the newly created tea as a response with status 201 (Created)
});

// to get all the tea is in here down
app.get('/teas', (req, res) => {
  res.status(200).send(teaData); // Sending all tea data with status 200 (OK)
});

// PUT endpoint to update a tea by ID
app.put('/teas/:id', (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id)); // Find the tea with the given ID
  if (!tea) {
    return res.status(404).send('tea not found'); // Return 404 if tea not found
  }
  const { name, price } = req.body; // Destructuring updated name and price from the request body
  tea.name = name; // Updating the name of the tea
  tea.price = price; // Updating the price of the tea
  res.status(200).send(tea); // Sending the updated tea data with status 200 (OK)
});
// Using === means we are comparing numbers with numbers
// parseInt helps us to identify whether what we give is an integer or not

// Deletion ke liye kya kar sakte
app.delete('/teas/:id', (req, res) => {
  const index = teaData.findIndex((t) => t.id === parseInt(req.params.id)); // Find the index of the tea with the given ID
  if (index === -1) {
    return res.status(404).send('tea was not found'); // Return 404 if tea not found
  }
  teaData.splice(index, 1); // Remove the tea from the array
  return res.status(204).send('deleted'); // Send status 204 (No Content) after deletion
});

app.listen(port, () => {
  console.log(`Server is running at a port of ${port}...`); // Logging the server start message
});












// app.get("/",(req,res)=>{
//     res.send("Hello from paras from Nagpur");
// })

// app.get("/X",(req,res)=>{
//     res.send("What ice tea would you like to prefer sir");
// })
// app.listen(port,()=>{
//     console.log(`Server is running at port: ${port}...`);

// })

//While testing on posman please make shure that you put 127.0.0.1:3000/