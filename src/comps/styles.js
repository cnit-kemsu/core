import { makeStyles } from "@material-ui/core/styles";
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

export const ListNavigator = makeStyles({
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

export const Loader = makeStyles({
  root: {
    position: 'relative'
  },
  justifier: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'fit-content',
    minHeight: '44px'
  },
  progressCircle: {
    position: 'absolute',
    zIndex: '900'
  },
  uiBlocker: {
    backgroundColor: 'white',
    opacity: '0.5',
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    zIndex: '800'
  }
});

export const Link = makeStyles({
  styledLink: {
    cursor: 'pointer'
  }
});

export const Fab = makeStyles(theme => ({
  root: {
    position: 'fixed !important',
    bottom: '48px !important',
    right: '48px !important'
  },
  enabled: {
    color: theme.palette.common.white + ' !important',
    backgroundColor: '#191919 !important'
  },
  disabled: {
    color: 'ffffff3f !important',
    backgroundColor: '#1919193f !important'
  },
  icon: {
    marginRight: '12px'
  }
}));

export const Error = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    marginRight: '4px'
  }
});

export const Notification = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1)
  },
  message: {
    display: 'flex',
    maxWidth: '290px'
  },
  icon: {
    fontSize: 20,
    marginRight: theme.spacing(1)
  },
  success: {
    backgroundColor: green[600] + ' !important'
  },
  warning: {
    backgroundColor: amber[700] + ' !important'
  },
  error: {
    backgroundColor: theme.palette.error.dark + ' !important'
  },
  info: {
    backgroundColor: theme.palette.primary.dark + ' !important'
  },
}));

export const Notifier = makeStyles({
  root: {
    //zIndex: 1400,
    position: 'fixed',
    bottom: 24,
    left: 24
  }
});