const initialState = {
  feedbacks: [
    { attribute: "good", counter: 0},
    { attribute: "ok", counter: 0 },
    { attribute: "bad", counter: 0 },
  ]
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'good':
      return (
        {
          ...state,
          feedbacks:
            state.feedbacks
                      .map(o => {
                        if (o.attribute === 'good') {
                          return { ...o, counter: o.counter + 1 }
                        }
                        return o
                      })
        }
      )
    case 'ok':
    return (
      {
        ...state,
        feedbacks:
          state.feedbacks
                    .map(o => {
                      if (o.attribute === 'ok') {
                        return { ...o, counter: o.counter + 1 }
                      }
                      return o
                    })
      }
    )
  case 'bad':
  return (
    {
      ...state,
      feedbacks:
        state.feedbacks
                  .map(o => {
                    if (o.attribute === 'bad') {
                      return { ...o, counter: o.counter + 1 }
                    }
                    return o
                  })
    }
  )
case 'ZERO':
      return initialState
  }
  return state
}


export default counterReducer
