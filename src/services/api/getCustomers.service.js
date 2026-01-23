export async function getCustomers(queryParams) {
  let url = "https://dummyjson.com/users";
  let params = "?";
  for (let param in queryParams) {
    if (queryParams[param]) {
      params += `${param}=${queryParams[param]}&`;
    }
  }
  if (params.length > 1) {
    url += params;
  }
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}
