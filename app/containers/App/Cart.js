import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';

const useStyles = makeStyles({
  root: {
    marginLeft: '1000px',
    marginTop: '30px',
    display: 'flex',
  },

  icon: {
    color: 'black',
  },
  count: {
    marginTop: '0px',
    color: 'black',
    textDecoration: 'none',
  },
});

const key = 'count';

function Cart() {
  const classes = useStyles();
  useInjectReducer({ key, reducer });
  const counts = useSelector(state => state.count);
  console.log(counts);
  return (
    <div className={classes.root}>
      <span>
        <h3 className={classes.count}>{counts && counts.length}</h3>
      </span>
      <span className={classes.icon}>
        <AddShoppingCartIcon />
      </span>

      <Link to="/checkout">
        {' '}
        <h2> DONE</h2>
      </Link>
    </div>
  );
}

export default Cart;
