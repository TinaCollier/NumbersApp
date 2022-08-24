import axios from "axios";
import { useEffect, useState } from 'react';
import {
    InputGroup,
    Input,
    Button
} from 'reactstrap';
import ResultButton from "../pages/trivia/ResultButton";



const Trivia = () => {
    const [ trivia, setTrivia ] = useState('');
    const random = Math.floor(Math.random() * 100);
    const [ number, setNumber ] = useState(null);
    const [ answer, setAnswer ] = useState(null);
    const [ input, setInput ] = useState(0);
    const [ correct, setCorrect ] = useState(false)

    const options = {
    method: 'GET',
    url: `https://numbersapi.p.rapidapi.com/${number}/trivia`,
    params: {fragment: 'true', notfound: 'floor', json: 'true'},
    headers: {
        'X-RapidAPI-Key': '8c92c093eemsh5e0dea634c28d38p1e8e03jsn7227b3c75cbe',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
    };

    useEffect(()=> {axios.request(options).then(function (response) {
        console.log(response.data);
        const text = response.data.text;
        setTrivia(text);
        setNumber(response.data.number);
    }).catch(function (error) {
        console.error(error);
    });
    }, []);

    const handleChange = (e) => {

        const newInput = e.target.value;
        setInput(newInput);
    }

    const handleClick = (e) => {
        e.preventDefault();
        const newAnswer = Number(input);
        setAnswer(newAnswer);
        if(newAnswer === number){
            setCorrect(true);
        }
    }

    const handleReset = () => {
        setCorrect(false);
        setAnswer(null);
        setInput(0);
        
    }

    return (
        <>
        <>What is: {trivia}?</>
        <InputGroup>
                <Input type="number" value={ input } onChange={ handleChange} />
                <Button onClick={ handleClick }>
                Submit
                </Button>
            </InputGroup>
            { answer === null ? <></> : <ResultButton correct={ correct } answer={ answer } number={ number }/>}
            <Button
                color="primary"
                tag="input"
                type="reset"
                value="Reset"
                onClick={ handleReset }
            />
        </>
        
    )
}

export default Trivia;