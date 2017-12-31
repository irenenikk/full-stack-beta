import React from 'react'

import Title from './title'

export default ({ anecdotes }) => {
  let mostVotes = 0;
  let mostVoted = "";
  const highestVoted = anecdotes.forEach(a => {
    if (a.vote > mostVotes) {
      mostVoted = a.anecdote
      mostVotes = a.vote
    }
  })
  if (mostVoted === "") {
    return null;
  }
  return (
    <div>
      <Title title="Most popular" />
      {mostVoted}
      <br/>
      has {mostVotes} votes
    </div>
  )
}
