import express, {json} from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const users = [];

app.post('/sign-up', (req, res) => {
    const body = req.body;
    const user = {
        username: body.username,
        avatar: body.avatar
    };
    users.push(user);
    console.log('OK');
    res.send('OK');
});

app.get('/sign-up', (req, res) => {
    res.send(users);
});

app.listen(5000, () => {
    console.log('No ar');
});