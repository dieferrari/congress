const axios = require('axios')
const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

export default class MembersService {
	async getAllMembers(){
		try {
      let response = await axios.get(API_URL, {
        headers: {
          'X-API-Key': API_KEY
        }
      })
      console.log("///////", response.data.results[0])
			//return response.data
		} catch(e) { console.log(e) }
	}
}