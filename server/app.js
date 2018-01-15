const express = require('express'); // Express web server framework
const request = require('request'); // "Request" library
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const { API_CONFIG } = require('./config/config');

const port = process.env.PORT || 3000;


/** data from config file **/
const client_id = API_CONFIG.client_id;
const client_secret = API_CONFIG.client_secret;
const redirect_uri = API_CONFIG.redirect_uri;

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
let generateRandomString = (length) => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

const stateKey = 'spotify_auth_state';

const app = express();


//#################

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, x-auth");
    res.header("Access-Control-Expose-Headers", "x-auth");
    next();
});


//##################


app.use(express.static(__dirname + '/public'))
    .use(cookieParser());


app.get('/login', (req, res) => {

    const state = generateRandomString(16);
    res.cookie(stateKey, state);


    // your application requests authorization
    const scope = 'user-read-private user-read-email playlist-modify-public';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));

    console.log('hello login', res.statusCode);
});


app.get('/callback', (req, res) => {

    console.log('hello callback', res.statusCode);
    // your application requests refresh and access tokens
    // after checking the state parameter

    const code = req.query.code || null;
    const state = req.query.state || null;
    const storedState = req.cookies ? req.cookies[stateKey] : null;


    if (state === null || state !== storedState) {
        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        res.clearCookie(stateKey);
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };


        request.post( authOptions, (error, response, body) => {


            if (!error && response.statusCode === 200) {

                const access_token = body.access_token,
                    refresh_token = body.refresh_token;



                // use the access token to access the Spotify Web API
                // request.get(authOptions, (error, response, body) => {
                //     console.log('test');
                //     const test_token = {
                //         code: body.access_token
                //     };
                //     res.send({access_token})
                // });


                // we can also pass the token to the browser to make requests from there
                //http://localhost:3001
                res.redirect(`http://localhost:3001/user/${access_token}/${refresh_token}`);
                // res.redirect('http://localhost:3001/user/' +
                //     querystring.stringify({
                //         access_token: access_token,
                //         refresh_token: refresh_token
                //     }))

            } else {
                res.redirect('http://localhost:3001/user/' +
                    querystring.stringify({
                        error: 'invalid_token'
                    }));
            }
        });
    }
});

app.get('/refresh_token', (req, res) => {
    // requesting access token from refresh token
    const refresh_token = req.query.refresh_token;
    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    request.post(authOptions, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
        }else{
            res.send({
                'response': response.statusCode
            });
        }
    });
});



app.listen(port, () => {
    console.log(`Started on port ${port}`)
});

