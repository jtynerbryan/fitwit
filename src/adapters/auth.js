class Auth {
  static login(userParams) {
    const userJSON = JSON.stringify(userParams)
    return fetch('http://localhost:3001/api/v1/login',{
      method: 'post',
      body: userJSON,
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then(res => {

          if (res.status == 204) {
            return {
              message: "Error Wrong user"
            }
          } else if (res.status == 200){
            return res.json()
          }


        }
      )
  }

  static signup(userParams) {
    const userJSON = JSON.stringify(userParams)
    return fetch('http://localhost:3001/api/v1/signup',{
      method: 'post',
      body: userJSON,
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
      .then(res => res.json())
  }


  static logOut() {
    localStorage.removeItem('token')
  }
}





export default Auth
