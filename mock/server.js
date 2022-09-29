const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, './users.json'));
const middlewares = jsonServer.defaults();

// 인코딩 옵션을 넣지 않으면 Buffer 객체(바이너리 데이터)를 반환하기 때문에 utf-8 인코딩 옵션을 넣어줌.
const userDB = JSON.parse( String( fs.readFileSync('./mock/users.json', { encoding: 'utf-8' }) ));

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use( middlewares );

const SECRET_KEY = '123456789';

const expiresIn = '1h';

// Create a token from a payload - {userId, password}
function createToken(payload) {
    return new Promise( (resolve, reject)=>{
        jwt.sign(payload, SECRET_KEY, {expiresIn}, (err, token) => {
            if (err) {
                return reject(err);
            }
            resolve(token);
        });
    })
}
/* token 생성 시점에 아래처럼 리프래시토큰 코드 추가하면 됨.
 const refreshToken = generateRefreshToken ({user: req.body.name})
 res.json ({accessToken: accessToken, refreshToken: refreshToken})
 */
function createRefreshToken(payload) {
    return new Promise( (resolve, reject)=>{
        jwt.sign(payload, SECRET_KEY, {expiresIn:'20m'}, (err, token) => {
            if (err) {
                return reject(err);
            }
            resolve(token);
        });
    })
}

// Verify the token
function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, {}, (err, decode) => decode !== undefined ?  decode : err);
}

// Check if the user exists in database
function isAuthenticated({userId, password}){
  return userDB.users.findIndex(user => user.userId === userId && user.password === password) !== -1;
}

// Register New User
/*server.post('/auth/register', (req, res) => {
  console.log("register endpoint called; request body:");
  console.log(req.body);
  const {userId, password} = req.body;

  if(isAuthenticated({userId, password}) === true) {
    const status = 401;
    const message = 'Email and Password already exist';
    res.status(status).json({status, message});
    return;
  }

  // users.json 에 user 추가
  fs.readFile('./users.json', (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({status, message });
      return;
    }

    // Get current users data
    const parseUserData = JSON.parse(data.toString());

    // Get the id of last user
    const lastItemId = parseUserData.users[data.users.length-1].id;

    //Add new user
    parseUserData.users.push( {id: lastItemId + 1, userId: userId, password: password} ); //add some data
    fs.writeFile('./users.json', JSON.stringify(data), (err, result) => {  // WRITE
      if (err) {
        const status = 401;
        const message = err;
        res.status(status).json({status, message});
      }
    });
  });

// Create token for new user
    createToken({userId, password})
        .then((accessToken)=>{
            console.log("Access Token:" +  accessToken );
            res.status(200).json({success: true, accessToken});
        }).catch((err)=>{
        res.status(401).json({success: false, errormessage: 'token sign fail'});
    });
});*/

// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {
  console.log("login endpoint called; request body:");

  const {userId, password} = req.body;

    console.log('server status', userId, password);

  if (isAuthenticated({userId, password}) === false) {
    const status = 401;
    const message = 'Incorrect userId or password';
    res.status(status).json({status, message});
    return;
  }
  // const accessToken =
    createToken({userId, password})
        .then((accessToken)=>{
            console.log("Access Token:" +  accessToken );
            res.status(200).json({success: true, accessToken});
        }).catch((err)=>{
        res.status(401).json({success: false, errormessage: 'token sign fail'});
    });

});

server.use(/^(?!\/auth).*$/,  (req, res, next) => {
  const {authorization}=req.headers;
  if (authorization === undefined || authorization.split(' ')[0] !== 'Bearer') {
    const status = 401;
    const message = 'Error in authorization format';
    res.status(status).json({status, message});
    return;
  }
  try {

      console.log('auth use 라우터 실행', authorization );
      verifyToken(authorization.split(' ')[1]);

      next();
    /*const verifyTokenResult = verifyToken(authorization.split(' ')[1]);

    if (verifyTokenResult instanceof Error) {
      const status = 401;
      const message = 'Access token not provided';
      res.status(status).json({status, message});
      return;
    }
    next();*/
  } catch (err) {
    const status = 401;
    const message = 'Error access_token is revoked';
    res.status(status).json({status, message});
  }
});

server.get('/auth/me', (req, res)=>{
   const {authorization}=req.headers;
   const badStatus=401;
   const successStatus=200;

    if ( hasAuthCheckToHeader(authorization) ) {
        const message = 'Error in authorization format';
        res.status(badStatus).json({status:successStatus, message});
        return;
    }
    try {
        const userVerifyData=verifyToken(authorization.split(' ')[1]);
        const findUserIdx=userDB.users.findIndex(user => user.userId === userVerifyData.userId);
        const userData = userDB.users[findUserIdx];
        // console.log( userVerifyData );
        res.status(successStatus).json({
            status: successStatus,
            userData: {
                idx: userData.id,
                userId: userData.userId
            },
            message: 'success authorization user'
        });

    } catch (e){
        const message = 'Error access_token is revoked';
        res.status(badStatus).json({status:badStatus, message});
    }
});

function hasAuthCheckToHeader( authorization ) {
    return authorization === undefined || authorization.split(' ')[0] !== 'Bearer'
}


server.use(router);

server.listen(3001, () => {
  console.log('Run Auth API Server');
});
