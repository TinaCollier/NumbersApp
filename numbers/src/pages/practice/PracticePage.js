import axios from 'axios';
import Calculator from "../../components/calculator/Calculator";
import Practice from "../../components/Practice";
import practice from "../../utils/images/practice.jpg"
import { 
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    CardGroup,
    CardImg,
    InputGroup,
    Input
} from 'reactstrap';
import { useState } from 'react';

const PracticePage = () => {
    const [ showCalculator, setShowCalculator ] = useState(false);
    const [ hideButton, setHideButton ] = useState(false);
    const handleCalculator = (e) => {
        e.preventDefault();
        setShowCalculator(true);
        setHideButton(true);
    }
    const handleHideCalculator = (e) => {
        e.preventDefault();
        setShowCalculator(false);
        setHideButton(false);
    }

    return (
        <CardGroup>
        <Card id="practiceCard">
            <CardImg
            alt="Card image cap"
            src={ practice }
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Math Practice
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Addition, Subtraction, Multiplication, Division
            </CardSubtitle>
            <CardText>
                <Practice />
            </CardText>
            </CardBody>
        </Card>
        
        <Card id="calculatorCard">
            {hideButton === true ? <Button onClick={ handleHideCalculator }>Hide Calculator</Button> : <Button onClick={ handleCalculator }>Show Calculator</Button>}
            {showCalculator === false ? 
            <CardBody></CardBody> 
            : 
            <CardBody>
                <CardTitle tag="h5">
                    Calculator
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Card subtitle
                </CardSubtitle>
                <Calculator />
            </CardBody>}
        </Card>
        </CardGroup>
    )
}

export default PracticePage;