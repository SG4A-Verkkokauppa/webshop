import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../App.css";

function GroupExample() {
  
  return (
    <CardGroup>
      <Card>
      <Card.Link href="/product/5">
        <Card.Img  variant="top" src={require("./images/muki-pinkki-maaginen.png")} />
        </Card.Link>
        <Card.Body>
        <Card.Link href="/product/5">
          <Card.Title>Maaginen muki</Card.Title>
          </Card.Link>
          <Card.Text>
          Maistele maagisen hyvät juomat tästä mukista.
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
      <Card.Link href="/product/1">
        <Card.Img variant="top" src={require("./images/paita-pinkki-maaginen.png")} />
        </Card.Link>
        <Card.Body>
        <Card.Link href="/product/1"><Card.Title>Maaginen paita</Card.Title></Card.Link>
          <Card.Text>
          Tämä paita hivelee maagisesti muotojasi.
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
      <Card.Link href="/product/10">
        <Card.Img variant="top" src={require("./images/parkkikiekko-pinkki-muumilimu.png")} />
        </Card.Link>
        <Card.Body>
        <Card.Link href="/product/10"><Card.Title>Maaginen parkkikiekko</Card.Title></Card.Link>
          <Card.Text>
          Välty maagisen suurilta parkkisakoilta.
          </Card.Text>
        </Card.Body>

      </Card>
    </CardGroup>
  );
}

export default GroupExample;

