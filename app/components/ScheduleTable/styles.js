export const styles = (theme) => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flexStart',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    overflowX:'scroll'
  },
  table: {
    minWidth: 650,
    width:'3100px'
  },
  userCell: {
    width: '100px',
    borderRight:'1px solid rgba(224, 224, 224, 1)',
  },
  tableCell: {
    padding:'10px',
    height:'130px',
    borderRight:'1px solid rgba(224, 224, 224, 1)',
    fontSize:'16px'
  },
  teamCell: {
    height:'40px!important',
    borderRight:'none!important',
    color:'#ffffff',
    fontWeight:'bold',
    backgroundColor: `#2196f3!important`
  },
  shift: {
    color:'#ffffff',
    fontWeight:'bold'
  },
  teamRow: {
    backgroundColor:'#2196f3'
  },
  shiftDivider: {
    borderTop:'1px solid rgba(255,255,255, 1'
  }
});
