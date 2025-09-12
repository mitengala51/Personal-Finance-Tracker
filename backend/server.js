import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'

const app = express()

app.use(express.json())
app.use(cors())

const mydb = new MongoClient("mongodb+srv://mitengala51_db_user:4S3QrzzoYt6mY1c7@cluster0.nnz48ct.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

mydb.connect().then(()=>{console.log("DB Connected")}).catch((err)=>{console.log("DB Connection Error: ", err)})

app.get('/', async (req,res)=>{
    try {
        const data = await mydb.db("Personal-Finance-Tracker").collection("Transaction").find({}).toArray()
        console.log(data)

        if(data.length === 0){
            return res.status(404).json({ message: "No Transaction Found" })
        }

       return res.status(200).json({ all_transaction: data })
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})