import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

export default () => {
  return (
  <Grid>
    <Row>
      <h2>About anecdote app</h2>
      <Col sm={6} md={3}>
        <p>According to Wikipedia:</p>

        <em>An anecdote is a brief, revealing account of an individual person or an incident.
          Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
          such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
          An anecdote is "a story with a point."</em>
      <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
      </Col>
      <Col sm={2} md={2}>
        <Image
          src='http://www.tracking-board.com/wp-content/uploads/2015/12/ca2.jpg'
          alt='Alan Turing'
          responsive
          circle
        />
        <div>
            <a href='http://www.tracking-board.com/benedict-cumberbatch-to-play-the-war-magician/'>
              source
            </a>
        </div>
      </Col>
    </Row>
  </Grid>
    )
}
