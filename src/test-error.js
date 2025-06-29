// このファイルは修正済みです
export function testError() {
  const x = 1;
  if (x === '1') {
    // 厳密な比較を使用
    console.log('Error test');
  }

  // 変数を使用
  const message = 'This variable is used';
  console.log(message);

  return x;
}
