import {Container, Row, Col, Stack} from "react-bootstrap";
import './Footer.css';
import spongebobFingerGuns from "../../assets/img/spongebobFingerGuns.jpg";

export const Footer = () => {
    return (
        <footer className = "footer">
            <Container>
                <Row>
                    <Col>
                        <Stack>
                            <img src={spongebobFingerGuns} className="sponge"></img>
                            <p className="footerText">Welcome to the footer</p>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack>
                            <a className="links" href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage">Indeed</a>
                            <a className="links" href="https://www.linkedin.com/in/harvey-ji-69a630200/">LinkedIn</a>
                            <a className="links" href="https://github.com/harveyji1">Github</a>
                            <a className="links" href="https://leetcode.com/u/harvey_ji/">Leetcode</a>

                        </Stack>
                    </Col>
                    <Col>
                        <Stack>
                            <p className="footerText">CopyRight 2024 Harvey Ji. All Rights Reserved</p>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;