import React, { useMemo } from 'react';
import { Pagination } from '../classes/Pagination';
import Typography from '@material-ui/core/Typography';
//import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { Paginator as useStyles } from './styles';

function ListNavigator({ total, limit = 10, offset = 0, onChange }) {
  const { update, previous, next } = (() => new Pagination(onChange)) |> useMemo(#);
  update(total, limit, offset);

  const classes = useStyles();
  return <div className={classes.root}>

    <Typography component="span" className={classes.title}>
      Показано {offset + 1}-{offset + limit |> # < total && # || total} элементов из {total}
      {/* Показано
      <span className={classes.current}>
        {' ' + (offset + 1) + '-' + (offset + limit) + ' '}
      </span>
      элементов из
      <span className={classes.total}>
        {' ' + total}
      </span> */}
    </Typography>

    {/* <Tooltip title={`Предыдущие ${limit} элементов`}>
      <span> */}
        <IconButton className={classes.previous} onClick={previous} disabled={offset === 0}>
          <ChevronLeft />
        </IconButton>
      {/* </span>
    </Tooltip> */}
  
    {/* <Tooltip title={`Следующие ${limit} элементов`}>
      <span> */}
        <IconButton className={classes.next} onClick={next} disabled={offset + limit >= total}>
          <ChevronRight />
        </IconButton>
      {/* </span>
    </Tooltip> */}
    
  </div>;
}

export default React.memo(ListNavigator);