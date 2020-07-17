import React from 'react';
import { Row, Col } from 'reactstrap';

export default function Projects() {
    return (
        <div className="projects">
            <h1 className="title">Projects</h1>
            <div className="thumbnail-div">
                <div className="thumbnail-pair">
                    <Row>
                        <Col md="6" className="left">
                            <div className="bar">
                                <p className="bar-text">Anime App</p>
                            </div>
                            <img
                                className="thumbnail"
                                src="/assets/AnimeAppThumbnailCrop.jpg"
                            ></img>
                        </Col>
                        <Col md="6" className="right">
                            <div className="bar">
                                <p className="bar-text">Tap of War</p>
                            </div>
                            <img
                                className="thumbnail"
                                src="/assets/TapOfWarThumbnailCrop.jpg"
                            ></img>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
