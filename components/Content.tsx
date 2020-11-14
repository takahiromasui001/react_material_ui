import { Grid } from '@material-ui/core'
import React from 'react'
import CoffeeCard from './CoffeeCard'
import CoffeeMakerList from '../constants/coofeeMakerList'

const Content: React.FC = () => {
  const getCoffeeMakerCard = (coffeeMakerObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <CoffeeCard {...coffeeMakerObj} />
      </Grid>
    )
  }
  return (
    <Grid container spacing={4}>
      {CoffeeMakerList.map((coffeeMakerObj) =>
        getCoffeeMakerCard(coffeeMakerObj)
      )}
    </Grid>
  )
}

export default Content
