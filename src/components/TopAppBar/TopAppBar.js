import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import { Button, Tooltip } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function TopAppBar(props) {
  const { classes, ...other } = props;

  return (
    <div className={classes.root}>
      {/* <AppBar position="static" color="default" {...other} className={classes.appbar}> */}
      <AppBar {...other} position="static" color="primary">
          <Toolbar>
              <Typography variant="h6" color="inherit">
                TasmoCompiler &nbsp;&nbsp;
              </Typography>
                <Tooltip placement='right' title={<FormattedMessage id='Change web language setting it on browser settings'/>}>
                  <Button color='inherit' size='small' disableFocusRipple='true' disableRipple='true' variant='text'>
                    <FormattedMessage id='language-flag'/>
                  </Button>
                </Tooltip>
          </Toolbar>
      </AppBar>
    </div>
  );
}

TopAppBar.propTypes = {
  // classes: PropTypes.object.isRequired,
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default withStyles(styles)(TopAppBar);
