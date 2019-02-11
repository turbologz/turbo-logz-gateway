import {expect} from 'chai';
import * as WebSocket from 'ws';
import '../server';

describe('Graphql Route', () => {

    beforeEach(() => {
        const wss = new WebSocket.Server({port: 3002});

        wss.on('connection', (ws: any) => {
            console.log('Got connection');

            ws.send('test-message-from-server');
        });
    });

    it('should communicate with graphql websocket at /subscriptions route', (done) => {
        const ws = new WebSocket('ws://localhost:8000/subscriptions');

        ws.on('message', (data) => {
            expect(data).to.eql('test-message-from-server');
            done();
        });
    });
});