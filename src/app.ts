import express from 'express';
const app = express();
app.use(express.json());
const port = process.env.PORT || 1200;

app.get('/', (req,res)=>{
    res.status(200).json("Hello Done With TypeScript");
});

app.listen(port, ()=>{
    console.log(`Server Started on Port ${port}`);
});