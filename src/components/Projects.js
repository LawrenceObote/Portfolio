import React from 'react';
import { Row, Col } from 'reactstrap';

export default function Projects() {
    return (
        <div className="projects">
            <h1 className="title">Projects</h1>
            <div className="thumbnail-div">
                <Row className="two-thumbnails">
                    <Col md="6" className="left">
                        <a href="https://gracious-roentgen-044e5d.netlify.app/">
                            <div className="bar">
                                <p className="bar-text">Anime App</p>
                            </div>
                            <img src="/assets/AnimeAppThumbnailCrop.jpg" alt={"Anime Application"}
                                className="thumbnail"
                            ></img>
                        </a>
                    </Col>
                    <Col md="6" className="right">
                        <a href="https://agitated-babbage-914960.netlify.app/">
                            <div className="bar">
                                <p className="bar-text">Tap of War</p>
                            </div>
                            <img
                                className="thumbnail"
                                src="/assets/TapOfWarThumbnailCrop.jpg"
                                alt={"Tap of War game"}
                            ></img>
                        </a>
                    </Col>
                </Row>
                <div className="thumbnail-single">
                    <Row>
                        <Col md="6" className="center">
                            <a href="https://jolly-nobel-a5c623.netlify.app/">
                                <div className="bar">
                                    <p className="bar-text">Cupcake Shop</p>
                                </div>
                                <img
                                    className="thumbnail"
                                    src="/assets/cupcakeShop.jpg"
                                    alt="Cupcake Shop"
                                ></img>
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
