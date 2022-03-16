//callback

a = [3, 2, 1];

//오름차순 정렬
a.sort(function(v1, v2){
  return v1 - v2;
});
console.log(a);

//내림차순 정렬
a.sort(function(v1, v2){
  return v2 - v1;
});
console.log(a);

function b(v1, v2){
  return v1 -v2;
}
a.sort(b);
