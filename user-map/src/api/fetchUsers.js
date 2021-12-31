import axios from 'axios'

export const fetchUsers =  async () => {

    try {
        const {data} = await axios.get('https://api.json-generator.com/templates/Xp8zvwDP14dJ/data',{ headers: { Authorization: "Bearer v3srs6i1veetv3b2dolta9shrmttl72vnfzm220z" }});
        return { data , err :undefined}
    } catch (err) {
        return {data: "", err : err}
    }
}