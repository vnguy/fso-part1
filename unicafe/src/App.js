import { useState } from 'react'

const Button = ({oncall, text}) => {
  return (
    <button onClick={oncall}>{text}</button>
  )
}

const StatisticLine = ({text, val}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{val}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  let pos = good / (good + neutral + bad)
  let avg = (good - bad) / (good + neutral + bad)
  if (good === 0 && bad === 0 && neutral === 0) {
    return (<>
        <h1>statistics</h1>
        <p>No feedback given</p>
    </>)
  } 
  else {
    return (
      <>
        <h1>statistics</h1>    
        <table>
          <tbody>
            <StatisticLine text="good" val={good}/>
            <StatisticLine text="neutral" val={neutral}/>
            <StatisticLine text="bad" val={bad}/>
            <StatisticLine text='all' val = {good + neutral + bad} />
            <StatisticLine text='average' val = {avg} />        
            <StatisticLine text='positive' val = {(pos * 100) + " %"} />                
          </tbody>
        </table>
      </>
      )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button oncall={()=>setGood(good + 1)} text="good"/>
      <Button oncall={()=>setNeutral(neutral + 1)} text="neutral"/>
      <Button oncall={()=>setBad(bad + 1)} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App