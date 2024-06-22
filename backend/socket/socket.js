import { Server } from "socket.io";
import http from 'http'
import express from 'express'

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET","POST"],
    },
})

const userSocketMap = {}; //{userId : socketId}

io.on("connection", (socket) => {
    console.log("a user connected", socket.id)

    const userId = socket.handshake.query.userId

    // socket.on() is used to listen to the events. can be used both on client and server side
    socket.on("disconnected", () => {
        console.log("user disconnected", socket.id)
    })
})

export { app,io,server } 