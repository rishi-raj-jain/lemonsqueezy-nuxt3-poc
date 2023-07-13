export default defineEventHandler(async (event) => {
  const slug = event.context.params.name
  var myHeaders = new Headers()
  myHeaders.append('Accept', 'application/vnd.api+json')
  myHeaders.append('Content-Type', 'application/vnd.api+json')
  const config = useRuntimeConfig()
  myHeaders.append('Authorization', config.AUTH_HEADER)
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  }
  const call = await fetch(`https://api.lemonsqueezy.com/v1/products`, requestOptions)
  const resp = await call.json()
  return resp
})
