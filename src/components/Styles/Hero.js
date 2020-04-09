import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HeroLayout from './HeroLayout';
import { Link } from 'react-router-dom';

const backgroundImage =
  'https://images.unsplash.com/photo-1505663365056-fc9da5b9340c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <div>
      <HeroLayout backgroundClassName={classes.background}>
        {/* Increase the network loading priority of the background image. */}
        <img style={{ display: 'none' }} src={backgroundImage} alt="" />
        <Button component={Link} to="/menu" variant="contained" color="primary">
          Home Page
        </Button>
        <Typography
          align="center"
          variant="h4"
          className={classes.h5}
          style={{ color: 'red' }}
        >
          How to help out during the Covid-19 crisis.
        </Typography>
      </HeroLayout>
    </div>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
