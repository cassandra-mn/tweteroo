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
    res.status(201).send('OK');
});

app.get('/sign-up', (req, res) => {
    res.send('OK');
});

app.post('/tweets', (req, res) => {
    const body = req.body;
    const tweet = {
        username: body.username,
        tweet: body.tweet
    };
    tweets.push(tweet);
    res.status(201).send('OK');
});

app.get('/tweets', (req, res) => {
    res.send(tweets.slice(tweets.length - 10));
});

app.get('/tweets/:user', (req, res) => {
    const {user} = req.params;
    const tweetsUsername = tweets.filter(tweet => tweet.username === user);
    res.send(tweetsUsername);
});

app.listen(5000, err => {
    if (err) console.log(err);
    console.log('No ar');
});