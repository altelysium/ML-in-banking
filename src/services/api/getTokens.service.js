export async function getTokens (username, password) {
  const response = await fetch("https://dummyjson.com/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      expiresInMins: 120,
    }),
  });
  const data = await response.json();
  return data;
}
