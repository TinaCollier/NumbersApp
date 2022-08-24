import axios from "axios";
import { useEffect, useState } from 'react';
import { 
    InputGroup,
    Input, 
    Button 
} from 'reactstrap';

const Facts = () => {
    const [ fact, setFact ] = useState('');
    const random = Math.floor(Math.random() * 1000);
    const [ number, setNumber ] = useState('');
    const [ input, setInput ] = useState(0);

    const options = {
        method: 'GET',
        url: `https://numbersapi.p.rapidapi.com/${number === ''? random : number}/math`,
        params: {fragment: 'false', json: 'true'},
        headers: {
          'X-RapidAPI-Key': '8c92c093eemsh5e0dea634c28d38p1e8e03jsn7227b3c75cbe',
          'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
        }
      };
      
      useEffect(() => {axios.request(options).then(function (response) {
          console.log(response.data);
          const text = response.data.text;
          setFact(text);
      }).catch(function (error) {
          console.error(error);
      });
    }, [number]);

    const handleChange = (e) => {
        const newInput = e.target.value;
        setInput(newInput);
    }

    const handleClick = (e) => {
        e.preventDefault();
        const newNumber = input;
        setNumber(newNumber);
    }

    return(
        <>
            <InputGroup className="factsInput">
                <Input type="number" value={ input } onChange={ handleChange }/>
                <Button onClick={ handleClick }>
                Click Me!
                </Button>
            </InputGroup>
            <h2>{number === '' ? random : number } Facts: { fact }</h2>
        </>
    )
}

export default Facts;