import { isAbsolute, relative } from 'path'

export const styles = theme => ({
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
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '16px',
    },
    '&::-webkit-scrollbar-button': {
      width: '0px',
      height: '0px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(33,150,243,0.2)',
      border: '0px none rgba(255,255,255,0)',
      borderRadius: '50px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'rgba(33,150,243,0.4)',
    },
    '&::-webkit-scrollbar-thumb:active': {
      background: 'rgba(33,150,243,0.4)',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
      border: '31px none rgba(255,255,255,0)',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-track:hover': {
      background: 'rgba(255,255,255,0)',
    },
    '&::-webkit-scrollbar-track:active': {
      background: 'rgba(255,255,255,0)',
    },
    '&::-webkit-scrollbar-corner': {
      background: 'transparent',
    },
  },
  table: {
    minWidth: 650,
    width: '4000px',
  },
  userCell: {
    width: '100px',
    borderRight: '1px solid rgba(224, 224, 224, 1)',
  },
  tableCell: {
    padding: theme.spacing.unit * 1,
    height: '130px',
    borderRight: '1px solid rgba(224, 224, 224, 1)',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: 'rgba(33,150,243,0.4)',
    },
  },
  teamCell: {
    height: '47px!important',
    borderRight: 'none!important',
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: `#2196f3!important`,
  },
  shift: {
    color: '#ffffff',
    fontWeight: 'bold',
    borderRight: 'none!important',
  },
  teamRow: {
    backgroundColor: '#2196f3',
  },
  shiftName: {
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 1}px  ${theme
      .spacing.unit * 1}px ${theme.spacing.unit * 1}px`,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  headerCell: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  firstCol: {
    position: 'absolute',
    width: '175px',
    marginTop: '2px',
    backgroundColor: '#fff',
    height: '138px',
  },
  tableRow: {
    position: 'relative',
  },
  shiftWrapper: {
    padding: `${theme.spacing.unit}px`,
    boxShadow: `0 2px 5px 0 rgba(0,0,0,.26),0 2px 10px 0 rgba(0,0,0,0.12)!important`,
    height:'122px'
  },
  reversedIcon: {
    transform: `scaleX(-1)`,
  },
  shiftDivider: {
    borderTop: '1px solid rgba(255,255,255, 1',
  },
})
