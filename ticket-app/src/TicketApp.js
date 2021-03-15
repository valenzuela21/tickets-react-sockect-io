import React from 'react';
import {RouterPage} from './Page/RouterPage';
import {UiProvider} from "./context/UiContext";
import {SocketProvider} from "./context/SocketContext";
import './App.css'

export const TicketApp = () => {
    return (
        <SocketProvider>
            <UiProvider>
                <RouterPage/>
            </UiProvider>
        </SocketProvider>
    )
}
