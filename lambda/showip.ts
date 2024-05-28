import axios from 'axios';

/**
 * 数値の引数を受け取って、その数値の順番のフィボナッチ数列を出すメソッド
 * @param n - フィボナッチ数列の順番
 * @returns フィボナッチ数列のn番目の値
 */
export function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

export const handler = async (event: any, context: any) => {
  const fibonacciNumber = fibonacci(10);
  console.log(fibonacciNumber);
  const response = await axios.get('https://api.ipify.org/?format=json');
  console.log(response.data);
  return response.data;
};
