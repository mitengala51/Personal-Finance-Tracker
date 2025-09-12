import axios from 'axios'

const API_URL = "http://localhost:3000"

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export async function fetchTransaction() {
    try {
        const response = await api.get("/")
        console.log(response.data.all_transaction)
        return response.data.all_transaction
    } catch (error) {
        console.log(error)
    }
}

export async function addTransaction(params) {
    try {
        console.log(params)
        const response = await api.post("/add", {
            title: params.title,
            amount: parseInt(params.amount),
            date: params.date,
            category: params.category
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
