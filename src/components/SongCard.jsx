import React from "react";
import { Col, Row, Image } from "react-bootstrap";

const SongCard = (props) => {
  console.log(props);
  return (
    <Row className="my-3">
      <Col xs={4} sm={4}>
        <Image src={props.props.image[1].link} alt="" thumbnail />
      </Col>
      <Col>
        <Row className="mb-2">
          <Col>
            {props.props.name} ({props.props.language})
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
            <audio src={props.props.downloadUrl[2].link} controls/>
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
