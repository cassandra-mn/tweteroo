import express, {json} from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
    const body = req.body;
    const user = {
        username: body.username,
        avatar: body.avatar
    };
    users.push(user);
    res.send('OK');
});

app.get('/sign-up', (req, res) => {
    res.send(users);
});

app.post('/tweets', (req, res) => {
    const body = req.body;
    const tweet = {
        username: body.username,
        tweet: body.tweet
    };
    tweets.push(tweet);
    res.send('OK');
});

app.get('/tweets', (req, res) => {
    res.send(tweets.slice(tweets.length - 10));
});

app.listen(5000, () => {
    console.log('No ar');
});