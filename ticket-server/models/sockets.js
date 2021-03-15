const TicketList = require('./tickect-list')

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();

        this.TickectList =  new TicketList();

    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log('Success client connection')
            // Escuchar evento: mensaje-to-server

            socket.on('mensaje-to-server', ( data ) => {
                console.log( data );
                this.io.emit('reserve-ticket', data );
            });

            socket.on('reserve_ticket',(data, callback) => {
                const newTicket = this.TickectList.createTicket()
                callback(newTicket);
            })

            socket.on('next-ticket-desktop',({username, desktop}, callback)=>{
                const ticket = this.TickectList.assignTicket(username, desktop)
                callback(ticket)
                this.io.emit('send_ticket-list', this.TickectList.latest_13)
            })


        });
    }


}


module.exports = Sockets;
