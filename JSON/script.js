fetch("test.txt")
  .then((data) => data.text())
  .then((res) => console.log(res));

// ここを追加
console.log("こんにちは");
// 「done」が最初に出力される