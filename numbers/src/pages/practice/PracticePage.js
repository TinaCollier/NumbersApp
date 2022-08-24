import Calculator from "../../components/calculator/Calculator";
import Practice from "../../components/Practice";

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

const PracticePage = () => {
    return (
        <CardGroup>
        <Card id="practiceCard">
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
                <Practice />
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

export default PracticePage;