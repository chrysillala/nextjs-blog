export async function getEndpointData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

export async function getSingleData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  // console.log(response.json())
  return response.json()
}