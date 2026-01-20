export async function getDashboardData(data) {
  const response = await fetch("https://dummyjson.com/carts/1");
  data = await response.json();
  return data;
}
