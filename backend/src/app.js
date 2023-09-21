const express = require('express');

const PORT = process.env.PORT || 8000;
const app = express();
const cors = require("cors")
app.use(cors())

const http = require('http')
const { Server } = require("socket.io")

const server = http.createServer(app);

const io = new Server(server , {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET" , "POST"]
    }
})

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`) ;
    socket.on("send_message", (data) => {
        console.log(data)
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
    // console.log(URL)
})