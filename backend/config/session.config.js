import expressSession from 'express-session';
import MongoStore from 'connect-mongo';

const sessionConfig = expressSession({
    secret: 'I Love Coding',
    store: MongoStore.create(),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
});

export { sessionConfig as session };
