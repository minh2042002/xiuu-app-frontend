import React from 'react'
import Chart from './Chart'
import Featured from './Featured'
import Widget from './Widget'
import "./dashboard.scss"
const Dashboard = props => {

  return (
    <div className='homeContainer'>
      <div className='widgets'>
        <Widget type="scheduled"/>
        <Widget type="done"/>
        <Widget type="processing"/>
        <Widget type="canceled"/>
        <Widget type="missed"/>
      </div>
      <div className='charts'>
        <Featured/>
        <Chart/>
      </div>
    </div>
  )
}

export default Dashboard