import React from "react";
import NavigationBar from "../Components/Navbar";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from "react-bootstrap/Carousel";

function Homepage() {
    return(
        <div>
            <Container>
                <NavigationBar/>
            </Container>
            <hr></hr>
            <br></br>
            <br></br>
            <Container>
                <h1 className="m-auto">Better Clothing for the planet</h1>
                <br></br>
                <p>Create screens directly in Method  or add your images from the Sketch or<br></br>Figma. You can even sync design from the cloud storage!</p>
                <br></br>
                <Button variant="outline-dark" size="lg">Shop All</Button>
            </Container>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img 
                        className="d-block w-100"
                        src="https://placehold.jp/400x200.png"
                        alt="First slide"/>
                        <Carousel.Caption>
                            <h3>First Slide</h3>
                            <p>This is the first slide of the carousel</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://placehold.jp/400x200.png"
                        alt="Second slide"/>
                        <Carousel.Caption>
                            <h3>Second Slide</h3>
                            <p>This is the second slide of the carousel</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://placehold.jp/400x200.png"
                        alt="Third Slide"/>
                        <Carousel.Caption>
                            <h3>Third Slide</h3>
                            <p>This is the third slide of the</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

export default Homepage;
