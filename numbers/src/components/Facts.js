import axios from "axios";
import { useEffect, useState } from 'react';
import { 
    InputGroup,
    Input, 
    Button,
    Row,
    Col
} from 'reactstrap';
import { factsAPI } from "../utils/factsAPI";

const Facts = () => {
    const [ fact, setFact ] = useState('');
    const random = Math.floor(Math.random() * 1000);
    const [ input, setInput ] = useState(0);
    const [ number, setNumber ] = useState('');

    const handleChange = (e) => {
        const newInput = e.target.value;
        setInput(newInput);
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const newNumber = input;
        const newFact = await factsAPI(input);
        setFact(newFact.text);
        setNumber(newNumber);
    }

    const handleRandom = async (e) => {
        e.preventDefault();
        setNumber(random);
        const newFact = await factsAPI(random);
        setFact(newFact.text);
    }

    return(

        <Row>
            <Col>
            <InputGroup className="factsInput">
                <Input type="number" value={ input } onChange={ handleChange }/>
                <Button onClick={ handleClick } >
                Click Me!
                </Button>
            </InputGroup>
            </Col>
            <Col>
            <Button onClick={ handleRandom }>Random</Button>
            </Col>
            <h2>{number === '' ? '' : number } Facts: { fact }</h2>
        </Row>
    )
}

export default Facts;
