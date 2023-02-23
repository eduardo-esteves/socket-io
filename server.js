const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors: {
        origin: "*"
    }
})

io.on('connection', client => {
    client.on('login', (data) => {
        console.log(data)
        client.broadcast.emit('loggedIn', data)
    })
});

server.listen(3000, () => {
    console.log('App RUN')
});
