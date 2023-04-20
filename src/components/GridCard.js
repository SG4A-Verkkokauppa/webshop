import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../App.css";

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={require("./images/muki-pinkki-maaginen.png")} />
        <Card.Body>
          <Card.Title>Maaginen muki</Card.Title>
          <Card.Text>
          Maistele maagisen hyvät juomat tästä mukista.
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src={require("./images/paita-pinkki-maaginen.png")} />
        <Card.Body>
          <Card.Title>Maaginen paita</Card.Title>
          <Card.Text>
          Tämä paita hivelee maagisesti muotojasi.
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src={require("./images/parkkikiekko-pinkki-muumilimu.png")} />
        <Card.Body>
          <Card.Title>Maaginen parkkikiekko</Card.Title>
          <Card.Text>
          Välty maagisen suurilta parkkisakoilta.
          </Card.Text>
        </Card.Body>

      </Card>
    </CardGroup>
  );
}

export default GroupExample;

