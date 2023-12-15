import { createUseStyles } from 'react-jss'

const useStyleWorkspace = createUseStyles({
  workspace: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px'
  },
  sidebar: {
    height: '100%',
  },
  workspaceName: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 10px 30px',
    color: '#727171',
    alignItems: 'center'
  },
  content: {
    margin: '10px',
    width: "calc(100% - 200px)",
  }
})

const sectionStyle = createUseStyles({
  kanban: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  'kanban__section': {
    width: '30%',
    minWidth: '300px',
    minHeight:'200px',
    backgroundColor: '#F4F5F7',
    padding: '10px',
    borderRadius: '10px',
    marginLeft: '10px',
  },
  'kanban__section__title': {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '16px',
    fontWeight: '700',
    margin: '10px 0 20px',
    justifyContent: 'space-between'
  },
  'kanban__section__content': {
    '& > * ~ *': {
      marginTop: '10px',
    },
  },
});

export default useStyleWorkspace;
export { sectionStyle }