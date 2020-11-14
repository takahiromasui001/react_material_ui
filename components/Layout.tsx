import { Grid } from '@material-ui/core'
import React from 'react'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          {children}
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  )
}

export default Layout
