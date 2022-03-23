import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { createConnection } from 'typeorm';

import { schema } from './Schema';
import {Users} from './Entities/Users';


const main = async () => {
    await createConnection({
        type: 'mysql',
        database: 'graphqlCRUD',
        username: 'root',
        password: '',
        logging: true,
        /** 
        * !if you want to create tables automatically then set this to true
        */
        synchronize: false,
        entities: [
            Users
        ]
    });
    
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    }));

    app.listen(3001, () => {
        console.log('Server started on port 3001');
    }
    );
};

main().catch(error => console.log(error));