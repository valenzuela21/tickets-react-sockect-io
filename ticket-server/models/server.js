// Servidor de Express
const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path     = require('path');
const cors     = require('cors');
const Sockets  = require('./sockets');

class Server {

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;

        // Http server
        this.server = http.createServer( this.app );

        // Configuraciones de sockets
        this.io = socketio( this.server, { /* configuraciones */ } );

        //Start Sockets IO
        this.sockets = new Sockets( this.io );

    }

    middlewares() {
        // Desplegar el directorio público
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );

        // CORS
        this.app.use( cors() );

        //Get Ultimate last Tickets
        this.app.get('/last-tickets',(req, res)=>{
            return res.json({
                status: 'Ok',
                last:this.sockets.TickectList.latest_13
            })
        })


    }

    execute() {

        // Start Middlewares
        this.middlewares();

        // Start Server
        this.server.listen( this.port, () => {
            console.log('Server run PORT:', this.port );
        });
    }

}


module.exports = Server;
