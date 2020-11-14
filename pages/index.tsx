import { Grid } from '@material-ui/core'
import React from 'react'
import Content from '../components/Content'
import Header from '../components/Header'

export default function Home() {
  return (
    <div id="test">
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item sm={2} />
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Grid>
    </div>
  )
}
