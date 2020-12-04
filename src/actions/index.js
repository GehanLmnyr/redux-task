import axios from 'axios'
const baseUrl = "http://localhost:4000/users"
export async function getUserByName(keyword) {
    try {
        let response = await axios.get(`${baseUrl}?name=${keyword}`)
        let payload=response.data
        console.log(payload)
        return {
            type: 'USERS',
            payload
        }
    } catch {
        console.log("error in getUser")
    }
}

export async function getUser() {
    try {
        let response = await axios.get(`${baseUrl}`)
        let payload =response.data
        console.log(payload,"userby name")
        return {
            type: 'USER_DETILAS',
            payload
        }
    } catch {
        console.log("error in getUser")
    }
}

export async function PostUser(data) {
    await axios.post(baseUrl,data)

   return{

        type: 'USER_POST',
        payload:"hamada"

   }


    
}