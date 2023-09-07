import "reflect-metadata";
import express from 'express';
import {DataSource} from 'typeorm';
const app = express();
app.use(express.json());
const port = process.env.PORT || 1200;
app.get('/', (req,res)=>{
    res.status(200).json("Hello Done With TypeScript");
});
const AppDataSouce = new DataSource({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'sahil',
    database:'postgres',
    entities:["src/entities/*{.ts,.js}"],
    synchronize:true,
    logging:true
});
AppDataSouce.initialize()
.then(()=>console.log('Database Connected'))
.catch((err)=>console.error(`Error While Conneting To Database ${err}`));
app.listen(port, ()=>{
    console.log(`Server Started on Port ${port}`);
});