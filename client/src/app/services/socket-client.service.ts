import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SocketClientService {
    socket: Socket;
    gameRoomId: string = Date.now().toString();
    isConnecting: boolean = false;
    id: string;

    isSocketAlive() {
        return this.socket && this.socket.connected;
    }

    connect() {
        try {
            if (!this.isSocketAlive() && !this.isConnecting) {
                this.socket = io(environment.serverUrl, { transports: ['websocket'], upgrade: false });
                this.isConnecting = true;
                this.on('connect', () => {
                    this.id = this.socket.id;
                });
            }
        } catch (e) {
            console.log(e);
            this.isConnecting = false;
        }
    }

    disconnect() {
        this.socket.disconnect();
    }

    removeAllListeners() {
        if (this.isSocketAlive()) this.socket.removeAllListeners();
    }

    on<T>(event: string, action: (data: T) => void): void {
        this.socket.on(event, action);
    }

    off<T>(event: string, action: (data: T) => void): void {
        this.socket.off(event, action);
    }

    send<T>(event: string, data?: T): void {
        if (data) {
            console.log(`Emitted event: ${event}, with data: ${JSON.stringify(data)}`);
            this.socket.emit(event, data);
        } else {
            console.log(`Emitted event: ${event}`);
            this.socket.emit(event);
        }
    }
}
