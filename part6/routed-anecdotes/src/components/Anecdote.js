import React from 'react'
import { Button, Badge, Panel } from 'react-bootstrap'

export default ({ element, handleVote }) => {
  return (
		<Panel>
      <Panel.Heading>{element.content}</Panel.Heading>
      <Panel.Body>
        <div>has <Badge>{element.votes}</Badge> votes</div>
        for more info see <a href={element.info}>{element.info}</a>
        <br/>
        <Button bsStyle="success"
          onClick={() => handleVote(element.id)}
        >
          Vote
        </Button>
      </Panel.Body>
    </Panel>
  )
}
