import React, { useState } from 'react'
import { Tabs } from 'antd'
import useStyleYourWork from './style'
import Dashboard from './Dashboard'
import Calendar from './calendar/Calendar'
import Recent from './recent/Recent'

const YourWork = props => {
  const [tab, setTab] = useState('recent')
  const classes = useStyleYourWork()

  const tabItems = [
    { label: 'Recent', key: 'recent' },
    { label: 'Dashboard', key: 'dashboard' },
    { label: 'Calendar', key: 'calendar' }
  ]

  const handleOnChange = (value) => {
    setTab(value)
  }

  return (
    <div className={classes.yourWork}>
      <div className={classes.sidebar}>
        <Tabs tabBarStyle={{ width: '180px', marginLeft: '30px' }} tabPosition='left' items={tabItems} onChange={handleOnChange}/>
      </div>
      <div className={classes.content}>
        {tab === 'recent' && <Recent setTab={setTab}/>}
        {tab === 'dashboard' && <Dashboard/>}
        {tab === 'calendar' && <Calendar/>}
      </div>
    </div>
  )
}

export default YourWork