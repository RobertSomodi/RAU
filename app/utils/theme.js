import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';

export const theme = createMuiTheme({
  palette: {
    primary: blue,
    danger: red.A100,
    info: blue,
    success: teal[500]
  }
});
