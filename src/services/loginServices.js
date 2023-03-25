const BASEURL = 'https://dummyjson.com'
export const loginAuth = async (payload) => {
  try {
    const response = await fetch(BASEURL + '/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    const resp = await response.json()
    console.log(response)
    console.log(resp)
    console.log('payamhdfgjhafjkb', payload)
    return resp

  } catch (error) {
    console.log('error', error)
  }
}
// export const loginAuth =async(payload) => {
//   await fetch(BASEURL+'/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(payload)
// })
// .then(res => {return res.json()})
// .catch(error=> console.log(error))
