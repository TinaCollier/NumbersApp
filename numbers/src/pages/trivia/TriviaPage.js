
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

const TriviaPage = () => {
    return (
        <CardGroup>
        <Card id="triviaCard">
            <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Card title
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Card subtitle
            </CardSubtitle>
            <CardText>
                <Trivia />
            </CardText>
            </CardBody>
        </Card>
        <Card id="calculatorCard">
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
            </CardBody>
        </Card>
        </CardGroup>
    )
}

export default TriviaPage;