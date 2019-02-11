import {expect} from 'chai';
import * as supertest from 'supertest';
import * as express from 'express';
import '../server';

describe('UI Route', () => {

    const port = 3000;

    let request: any;
    let testServer: any

    beforeEach(async () => {
        request = supertest("http://localhost:8080");

        const app = express();

        app.get('/', (req, res) => res.send('Hello World!'));

        await new Promise((resolve) => {
            testServer = app.listen(port, () => resolve())
        });
    });

    afterEach(() => {
        testServer.close();
    });

    it('should load correct user interface when loading route /', (done) => {
        request
            .get("/")
            .expect(200)
            .then((response: any) => {
                expect(response.text).to.eql('Hello World!');
                done();
            });
    });
});