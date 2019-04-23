import { makeStyles } from "@material-ui/core/styles";

export const Paginator = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    float: 'right'
  },
  title: {
    userSelect: 'none'
  },
  // current: {
  // },
  // total: {
  // },
  previous: {
    marginLeft: '5px'
  },
  next: {
    marginLeft: '5px'
  }
});

