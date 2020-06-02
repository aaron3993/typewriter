const sentence = "hello there from lighthouse labs";

time = 50
for (const char of sentence) {
  time += 50
  setTimeout(() => {
    process.stdout.write(char)
  }, time)
}
setTimeout(() => {
  console.log('\n')
}, time)