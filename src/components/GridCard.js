import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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
      <img src="https://picsum.photos/200/300?grayscale" class="card-img-top" alt="..."/>
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


