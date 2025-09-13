import axios from "axios";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function fetchTransaction() {
  try {
    const response = await api.get("/");
    // console.log(response.data.all_transaction);
    return response.data.all_transaction;
  } catch (error) {
    console.log(error);
  }
}

export async function addTransaction(transaction) {
  try {
    console.log(transaction);
    const response = await api.post("/add", {
      title: transaction.title,
      amount: parseInt(transaction.amount),
      date: transaction.date,
      category: transaction.category,
    });
    // console.log(response.data);
    return response.data.message;
  } catch (error) {
    console.log(error);
  }
}

export async function EditTransaction(id, transaction) {
  try {
    const response = await api.put(`/${id}/edit`, {
      title: transaction.title,
      amount: parseInt(transaction.amount),
      date: transaction.date,
      category: transaction.category,
    });
    // console.log(response);
    return response.data.message;
  } catch (error) {
    console.log(error);
  }
}

export async function DeleteTransaction(id) {
  try {
    const response = await api.delete(`/${id}/delete`);
    console.log(response);
    return response.data.message;
  } catch (error) {
    console.log(error);
  }
}

export async function Summary() {
  try {
    const response = await api.get("/summary")
    console.log(response)
    return response.data.summary
  } catch (error) {
    console.log(error)
  }
}
