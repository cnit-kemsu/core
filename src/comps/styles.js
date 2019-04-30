import { makeStyles } from "@material-ui/core/styles";

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