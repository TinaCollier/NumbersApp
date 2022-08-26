import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    InputGroup,
    Input,
    Button
} from 'reactstrap';
import ResultButton from "./ResultButton";
import { practiceAPI } from "../utils/practiceAPI";

const Practice = () => {
    const [ answer, setAnswer ] = useState(null);
    const [ input, setInput ] = useState(0);
    const [ correct, setCorrect ] = useState(false);
    const [ number, setNumber ] = useState(null);
    const [ practice, setPractice ] = useState(null);
    console.log('ping', number, practice)
    
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

    const handleGenerate = async (e) => {
        e.preventDefault();
        const question = await practiceAPI();
        console.log('q', question)
        setPractice(question.expression);
        setNumber(question.answer);
    }

    const handleReset = () => {
        setCorrect(false);
        setAnswer(null);
        setInput(0);
        
    }

    return (
        <>
        { number === null ? <>Click Generate for a math problem.</> : <>What is: {practice}?</>}
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

export default Practice;