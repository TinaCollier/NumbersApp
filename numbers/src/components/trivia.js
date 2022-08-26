import axios from "axios";
import { useEffect, useState } from 'react';
import {
    InputGroup,
    Input,
    Button
} from 'reactstrap';
import ResultButton from "./ResultButton";
import { triviaAPI } from "../utils/triviaAPI";



const Trivia = () => {
    const [ trivia, setTrivia ] = useState('');

    const [ number, setNumber ] = useState(null);
    const [ answer, setAnswer ] = useState(null);
    const [ input, setInput ] = useState(0);
    const [ correct, setCorrect ] = useState(false)

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
        setNumber(null); 
    }

    const handleGenerate = async (e) => {
        e.preventDefault();
        await triviaAPI();
        const question = await triviaAPI();
        setTrivia(question.text);
        setNumber(question.number);
        setAnswer(null);
    }


    return (
        <>
        { number === null ? <>Click Generate for a math problem.</> : <>What is: { trivia }?</>}
        <InputGroup>
                <Input type="number" value={ input } onChange={ handleChange} />
                <Button onClick={ handleClick }>
                Submit
                </Button>
            </InputGroup>
            { answer === null ? <></> : <ResultButton correct={ correct } answer={ answer } number={ number }/>}
            <Button onClick={ handleGenerate }>Generate</Button>
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