//filesystem
var fs = require('fs');

// readFileSync 동기식
// 입력 순서대로 처리
console.log('1');
var data = fs.readFileSync('data.txt', {encoding : 'utf8'});
console.log(data);

//readFile 비동기식
//실행 순서대로 처리
console.log('2');
var data = fs.readFile('data.txt', {encoding : 'utf8'}, function(err, data){
  console.log('3');
  console.log(data);
});
console.log('4');
