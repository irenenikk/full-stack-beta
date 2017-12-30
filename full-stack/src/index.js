import React from 'react'
import ReactDOM from 'react-dom'

import Title from './components/title';
import Stats from './components/stats';
import Content from './components/content';

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const content = [
    { part: 'Reactin perusteet', exercises: 10 },
    { part: 'Tiedonvälitys propseilla', exercises: 7 },
    { part: 'Komponenttien tila', exercises: 14 }
  ];
  return (
    <div>
      <Title title={kurssi} />
      <Content content={content} />
      <Stats content={content}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
