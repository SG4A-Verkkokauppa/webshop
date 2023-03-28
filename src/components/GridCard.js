import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={require("./images/kuva4.jpg")} />
        <Card.Body>
          <Card.Title>Paita</Card.Title>
          <Card.Text>
          Tässä on meidän paras paita hienossa tervetulo alennuksessa.
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src={require("./images/kuva4.jpg")} />
        <Card.Body>
          <Card.Title>Kynä</Card.Title>
          <Card.Text>
          Tässä on tosi tyylikäs kynä.
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src={require("./images/kuva4.jpg")} />
        <Card.Body>
          <Card.Title>Kumi</Card.Title>
          <Card.Text>
          Jotta voit pyyhkiä ylimääräisen magian.
          </Card.Text>
        </Card.Body>

      </Card>
    </CardGroup>
  );
}

export default GroupExample;






/*...................


export default function GridCard() {
  return (
    <>
    <Container>
      <Row class="row row-cols-1 row-cols-md-3 g-4">
      <Col>
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/200/300?grayscale" class="card-img-top" alt="Tässä pitäisi olla kuva"/>
      <div class="card-body">
        <h5 class="card-title">Paita</h5>
        <p class="card-text">Tässä on meidän paras paita hienossa tervetulo alennuksessa.</p>
      </div>
    </div>
  </div>
  </Col>

  <Col>
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/200/300?grayscale" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Kynä</h5>
        <p class="card-text">Tässä on tosi tyylikäs kynä.</p>
      </div>
    </div>
  </div>
  </Col>

  <Col>
  <div class="col">
    <div class="card">
      <img src="public/logo192.png" class="card-img-top" alt="Paita kuva"/>
      <div class="card-body">
        <h5 class="card-title">Toinen paita</h5>
        <p class="card-text">Tässä on vieläkin tyylikkäämpi paita jos se on edes mahdollista.</p>
      </div>
    </div>
  </div>
  </Col>
<Col>
  <div class="col">
    <div class="card">
      <img src="https://picsum.photos/200/300?grayscale" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Kumi</h5>
        <p class="card-text">Jotta voit pyyhkiä ylimääräisen magian.</p>
      </div>
    </div>
  </div>
</Col>
</Row>
</Container>
    </>
    )
}
*/

