import {Container, Row, Col} from "react-bootstrap";

export const Footer = () => {
    return (
        <footer className = "footer">
            <Container>
                <Row className = "align-item-center">
                <Col sm={6}>
                    <p>This is my footer</p>
                </Col>
                <Col sm = {6} className="text-center text-sm-end">
                    <p>CopyRight 2024. All Right Reserved</p>
                </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;