import React from "react";
import { Col, Row, Image } from "react-bootstrap";

const SongCard = (props) => {
  return (
    <Row className="my-3" >
      <Col xs={4} sm={4}>
        <Image src={props.props.image[1].link} alt="" thumbnail className="song-image" />
      </Col>
      <Col xs={8} sm={8}>
        <Row className="mb-2">
          <Col>
            <h5 className="song-title">{props.props.name} {props.props.language !== "unknown" ? <>({props.props.language})</> : null}</h5>
          </Col>
        </Row>
        <Row>
          <Col className="mb-2">{props.props.album.name}</Col>
        </Row>
        <Row className="mb-2">
          <Col>{props.props.primaryArtists}</Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <audio src={props.props.downloadUrl[2].link} controls className="audio-control" />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>{props.props.copyright}</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SongCard;
