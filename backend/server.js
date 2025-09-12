import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'

const app = express()

app.use(express.json())
app.use(cors())

const mydb = new MongoClient("mongodb+srv://mitengala51_db_user:4S3QrzzoYt6mY1c7@cluster0.nnz48ct.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

mydb.connect().then(()=>{console.log("DB Connected")}).catch((err)=>{console.log("DB Connection Error: ", err)})

const database = mydb.db("Personal-Finance-Tracker").collection("Transaction");

app.get('/', async (req,res)=>{
    try {
        const data = await database.find({}).toArray()
        console.log(data)

        if(data.length === 0){
            return res.status(404).json({ message: "No Transaction Found" })
        }

       return res.status(200).json({ all_transaction: data })
    } catch (error) {
        console.log(error)
    }
})

app.post('/add', async (req,res)=>{

    try {
       const { title, amount, date, category } = req.body
       console.log(title,amount,date,category)

       if(!title || !amount || !date || !category){
        return res.status(404).json({ message: "All Fields are mandatory" })
       }
       
       const data = await database.insertOne({ title, amount, date, category })
       console.log(data)

       if(data.length === 0){
        return res.status(401).json({ message: "Something went wrong" })
       }

       return res.status(200).json({ message: "Transaction Added Successfully" })
    } catch (error) {
        console.log(error)
    }
    

})

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})