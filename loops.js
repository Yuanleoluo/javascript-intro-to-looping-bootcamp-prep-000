

function forLoop(a){
  for(let i = 0; i<33; i++){
      a[i] = 'I am ${i} strange loops'
  }
  return a
}

function whileLoop(a){
  while(a>0){
    console.log(a)
    a--
  }
  return "done"
}
