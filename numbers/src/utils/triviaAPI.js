import axios from "axios";

export const triviaAPI = async () => {
    const random = Math.floor(Math.random() * 100);
    const options = {
        method: 'GET',
        url: `https://numbersapi.p.rapidapi.com/${random}/trivia`,
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