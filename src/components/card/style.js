import { createUseStyles } from 'react-jss';

const cardStyle = createUseStyles({
  card: {
    padding: '15px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    fontSize: '16px',
  },
  High: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '0.75rem', 
    borderRadius: '0.25rem', 
    padding: '0.25rem',
    color: '#DC2626', 
    border: '1px solid #DC2626', 
    width: 'fit-content'
  },
  Medium: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '0.75rem', 
    padding: '0.25rem',
    borderRadius: '0.25rem', 
    color: '#FF9800', 
    border: '1px solid #FF9800', 
    width: 'fit-content'
  },
  Low: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '0.75rem', 
    padding: '0.25rem', 
    borderRadius: '0.25rem', 
    color: '#90EB94', 
    border: '1px solid #90EB94', 
    width: 'fit-content'
  },
  avatar: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  UnassignedAvatar : {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
});

export default cardStyle