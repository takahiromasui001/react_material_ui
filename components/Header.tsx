import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded'

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}))

const Header: React.FC = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          This is our header
        </Typography>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  )
}

export default Header
