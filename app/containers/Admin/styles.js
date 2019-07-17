export const styles = theme => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
})
