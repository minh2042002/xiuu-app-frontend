import React, { useState } from 'react'
import { Tabs } from 'antd'
import useStyleTeams from './style'
import User from './User'
import Group from './Group'

const Teams = props => {
  const [tab, setTab] = useState('user')
  const classes = useStyleTeams()

  const tabItems = [
    { label: 'User', key: 'user' },
    { label: 'Group', key: 'group' },
  ]

  const handleOnChange = (value) => {
    setTab(value)
  }

  return (
    <div className={classes.teams}>
      <div className={classes.sidebar}>
        <Tabs tabBarStyle={{ width: '180px', marginLeft: '30px' }} tabPosition='left' items={tabItems} onChange={handleOnChange}/>
      </div>
      <div className={classes.content}>
        {tab === 'user' && <User/>}
        {tab === 'group' && <Group/>}
      </div>
    </div>
  )
}

export default Teams