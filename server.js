const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors: {
        origin: "*"
    }
})

io.on('connection', client => {
    console.log(client.id)
});

server.listen(3000, () => {
    console.log('App RUN')
});
