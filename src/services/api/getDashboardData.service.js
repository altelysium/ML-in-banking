export async function getDashboardData() {
  const response = await fetch("https://dummyjson.com/carts/1");
  const data = await response.json();
  return data;
}
