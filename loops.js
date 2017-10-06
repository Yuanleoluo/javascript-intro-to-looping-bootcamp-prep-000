

function forLoop(a){
  for(let i = 0; i<25; i++){
      a[i] = 'I am ${i} strange loops'
  }
  return a
}

function whileLoop(a){
  while(a>0){
    a--
  }
  return "done"
}