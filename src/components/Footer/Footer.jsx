import {Container, Row, Col} from "react-bootstrap";

export const Footer = () => {
    return (
        <footer className = "footer">
            <Container>
                <Row>
                <Col sm={6}>
                    <p>Sick footer Bro!</p>
                </Col>
                <Col sm = {6}>
                    <p>CopyRight 2024. All Right Reserved</p>
                </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;