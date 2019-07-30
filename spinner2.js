for(let i = 100; i <= 1700; i+=200){
  let char = "";
  (i === 100 || i === 900 || i === 1700)? char = "|": "";
  (i === 300 || i === 1100)? char = "/": "";
  (i === 500 || i === 1300)? char = "-": "";
  (i === 700 || i === 1500)? char = "\\": "";
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, i);
}