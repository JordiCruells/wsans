var sum = process.argv.slice(2).reduce(function(a,b) {return Number(a) + Number(b);});
console.log(sum);
