import axios from "axios";

export const practiceAPI = async () => {
    const options = {
        method: 'GET',
        url: `https://x-math.herokuapp.com/api/random?max=999&negative=1`,
        params: {fragment: 'true', notfound: 'floor', json: 'true'},
        headers: {
            'X-RapidAPI-Key': '8c92c093eemsh5e0dea634c28d38p1e8e03jsn7227b3c75cbe',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
        }
    };
    return await axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });    
}