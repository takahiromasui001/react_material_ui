import {
  AppBar,
  Button,
  makeStyles,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Toolbar,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'

const useStyle = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(2),
  },
}))

const Checkout: React.FC = () => {
  const classes = useStyle()

  // for steps(後で別コンポーネントに分けたい)
  const [activeStep, setActiveStep] = useState(0)
  const steps = ['Shipping address', 'Payment details', 'Review your order']

  const handleNext = () => {
    setActiveStep((prev) => prev + 1)
  }
  const handleBack = () => {
    setActiveStep((prev) => prev - 1)
  }
  // for steps end

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return <Typography>Content 0</Typography>
      case 1:
        return <Typography>Content 1</Typography>
      case 2:
        return <Typography>Content 2</Typography>
      case 3:
        return <Typography>Complete 3</Typography>
      default:
        throw new Error('unknown step')
    }
  }

  return (
    <>
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {getStepContent()}
          {activeStep < steps.length ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <Button>Finish</Button>
          )}
          <Button onClick={handleBack}>Backs</Button>
        </Paper>
      </main>
    </>
  )
}

export default Checkout
