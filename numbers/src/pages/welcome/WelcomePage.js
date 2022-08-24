import { 
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardImg,
    Button, 
    Row,
    CardGroup
} from 'reactstrap';
import facts from '../../utils/images/facts.jpg';
import trivia from '../../utils/images/trivia.jpg';
import practice from '../../utils/images/practice.jpg';
import welcome from '../../utils/images/welcome.jpg';

import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div>
            <Row>
                <Card className="my-1">
                    <CardImg
                        alt="Card image cap"
                        src={welcome}
                        style={{
                            height: 180
                        }}
                        top
                        width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Welcome to Numbers!
                            </CardTitle>
                            <CardText>
                            Here is a safe space to learn math facts, trivia, and practice math.
                            </CardText>
                            <CardText>
                                <small className="text-muted">
                                By Tina Collier
                                </small>
                            </CardText>
                        </CardBody>
                </Card>
            </Row>
            <Row>
            <CardGroup>
                <Card className="welcomeCards">
                    <CardImg
                    alt="Card image cap"
                    src={facts}
                    top
                    width="100%"
                    className="welcomeImg"
                    />
                    <CardBody className="welcomeCardsBody">
                    <CardTitle tag="h5">
                        Math Facts
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Brought to you by the Numbers API
                    </CardSubtitle>
                    <CardText>
                        Choose me to learn some math facts!
                    </CardText>
                    <Link to="/trivia">
                        <Button>
                            Button
                        </Button>
                    </Link>
                    </CardBody>
                </Card>
                <Card className="welcomeCards">
                    <CardImg
                    alt="Card image cap"
                    src={trivia}
                    top
                    width="100%"
                    className="welcomeImg"
                    />
                    <CardBody className="welcomeCardsBody">
                    <CardTitle tag="h5">
                        Math Trivia
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Brought to you by the Numbers API
                    </CardSubtitle>
                    <CardText>
                        Choose me to be quizzed on math trivia!
                    </CardText>
                    <Link to="/facts">
                        <Button>
                            Button
                        </Button>
                    </Link>
                    </CardBody>
                </Card>
                <Card className="welcomeCards">
                    <CardImg
                    alt="Card image cap"
                    src={practice}
                    top
                    width="100%"
                    className="welcomeImg"
                    />
                    <CardBody className="welcomeCardsBody">
                    <CardTitle tag="h5">
                        Math Practice
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Brought to you by the xMath API
                    </CardSubtitle>
                    <CardText>
                        Choose me to practice some addition, subtraction, multiplication, and division.
                    </CardText>
                    <Link to="/practice">
                        <Button>
                            Button
                        </Button>
                    </Link>
                    </CardBody>
                </Card>
                </CardGroup>
            </Row>
        </div>
    )
}

export default WelcomePage;