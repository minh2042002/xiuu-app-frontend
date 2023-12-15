import { createUseStyles } from 'react-jss'

const useStyleTeams = createUseStyles({
  teams: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px'
  },
  sidebar: {
    height: '100%',
  },
  content: {
    margin: '10px'
  }
})

export default useStyleTeams