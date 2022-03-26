//root file, entry file..
var express = require('express');
var app = express();
app.locals.pretty= true;
//Express 템플리트 렌더링(Jade > pug)
app.set('view engine', 'pug');
//jade파일의 디렉토리가 됨
app.set('views', './views');
//정적인 파일이 위치한 directory를 지정하는 기능
//static('directory 이름')
app.use(express.static('public'));

//temp파일을 랜더링하여 웹 페이지로 전송
app.get('/template', function(req, res){
  //res('file', {property & value})
  res.render('temp', {time : Date(), _title :'jade'});
});

//url,  after call function(req, res)
app.get('/', function(req, res){
  res.send('hello home page');
});

app.get('/dynamic', function(req, res){
  var lis = '';
  for(var i = 0; i < 5; i++)
    lis += '<li> coding</li>';

  var time = Date();
  var output = `<!DOCTYPE html>
                <html lang="en" dir="ltr">
                  <head>
                    <meta charset="utf-8">
                    <title></title>
                  </head>
                  <body>
                    hello, dynamic !
                    <ul>
                    ${lis}
                    </ul>
                    ${time}
                  </body>
                </html>`;

  res.send(output);
});

app.get('/route', function(req, res){
  res.send('hello router, <img src="/tmp.jpg">');
});

app.get('/login', function(req, res){
  res.send('<h1>Please login</h1>');
});

//port number, call back function
app.listen(3000, function(){
  console.log('connected 3000 port!');
});
