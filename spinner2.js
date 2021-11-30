const spin = function(time, bar) {
  setTimeout(() => process.stdout.write(`\r${bar}   `), time);
}
for(let i = 0; i < 8; i++) {
  spin((i * 900) + 100,'|');
  spin((i * 900) + 300,'/');
  spin((i * 900) + 500,'-');
  spin((i * 900) + 700,'\\');
}