import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Col } from "reactstrap";
import photo from "../../image/hg3.jpg";
import photo1 from "../../image/hg5.jpg";
import photo2 from "../../image/hg6.jpg";
import photo3 from "../../image/hg8.jpg";

export default function Content(props) {
  return (
    <Col>
      <Card>
        <CardImg
          top
          width="50%"
          src={props.photo}
          alt="# "
        />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Book room</Button>
        </CardBody>
      </Card>
    </Col>
  );
}
