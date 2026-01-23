export async function getSearchedCustomers(search) {
  console.log(search);
  let url = "https://dummyjson.com/users";
  if (search) {
    url += `/search?q=${search}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  console.log(url, data);
  return data;
}
