// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

for(let i = 0; i < 4; i++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, (i * 900) + 100);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  },(i * 900) + 300);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  },(i * 900) + 500);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, (i * 900) +700);
  
  
}


