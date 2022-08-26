import { useState } from 'react';
import Calculator from "../../components/calculator/Calculator";
import Trivia from "../../components/trivia";
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
import trivia from '../../utils/images/trivia.jpg';

const TriviaPage = () => {
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
        <Card id="triviaCard">
            <CardImg
            alt="Card image cap"
            src={ trivia }
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Math Trivia
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Brought to you by the NumbersAPI
            </CardSubtitle>
            <CardText>
                <Trivia />
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

export default TriviaPage;