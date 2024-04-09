import express from "express";
import cors from "cors";
import axios from "axios";
import pg from 'pg';
import env from "dotenv";   


const app=express();
env.config();
app.use(cors());
app.use(express.json());

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  });
  db.connect();

  let finalValue=null

app.get("/getData",async(req,res)=>{
    const result= await axios.get(process.env.QUOTE_API_LINK);
    const quotejson={
        "quote":result.data[0].q,
        "author":result.data[0].a
    }
    res.send(quotejson);
})

app.post('/api/data', async(req, res) => {
    console.log(req.body.inputtext);
    const tododata=req.body.inputtext;
    res.send('Data received successfully');
    const addtodb=await db.query("INSERT INTO tododata (data) VALUES ($1)",[tododata]);
});

app.post('/api/check',async(req,res)=>{
    const isCheck=req.body.isChecked;
    finalValue=req.body.finalValue;
    await db.query("UPDATE tododata SET checked=($1) WHERE data=($2);",[isCheck,req.body.finalValue]);
});

app.get('/api/completed',async(req,res)=>{
    const sendChecktofe=await db.query("SELECT * FROM tododata WHERE checked=($1)",[true]);
    res.send(sendChecktofe.rows);
})

app.get('/gettododata',async(req,res)=>{
    const todoData= await db.query("SELECT * FROM tododata ORDER BY checked");
    res.send(todoData.rows);
});

app.post('/deletetask',async(req,res)=>{
    const deleteTodo=req.body.deleteTodo;
    console.log(deleteTodo);
    await db.query("DELETE FROM tododata WHERE data=($1)",[deleteTodo]);
})


app.listen(5000,()=>{console.log("The backend is running on port 5000")})