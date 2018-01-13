var socket = io();
    
socket.on('connect',function()  {
    console.log('Connected to server');
})

socket.on('disconnect', function() {
    console.log('Disconnected from the server');
})

socket.on('newMsg', function(msg) {
    console.log('New message: ', msg);
})

socket.emit('createMsg', {
    text:'Helloo buddy..',
    from:'snake'
})
