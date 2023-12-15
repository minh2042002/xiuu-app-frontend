import { createUseStyles } from 'react-jss'

const useStyleDashboard = createUseStyles({
  head: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: '1px solid #cecece',
    '& .ant-tabs': {
      lineHeight: 2
    },
    '& .ant-tabs-nav': {
      margin: 0
    }
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0 50px 0 60px',
    paddingRight: '70px',
    borderRight: '1px solid #cecece',
    color: '#1126E2',
    fontSize: '25px'
  },
  tab: {
    marginTop: '30px'
  },
})

export default useStyleDashboard