import {expect} from 'chai';
import * as supertest from 'supertest';
import * as express from 'express';
import '../server';

describe('Graphql Route', () => {

    let request: any;

    beforeEach(async () => {
        request = supertest("http://localhost:8080");

        const app = express();
        const port = 3001;

        app.get('/graphql', (req, res) => res.send({type: 'graphql'}));

        await new Promise((resolve) => {
            app.listen(port, () => resolve())
        });
    });

    it('should communicate with graphql at /graphql route', (done) => {
        request
            .get("/graphql")
            .expect(200)
            .then((response: any) => {
                expect(response.body).to.eql({type: 'graphql'});
                done();
            })
    });
});