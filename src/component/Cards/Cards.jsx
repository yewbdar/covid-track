import React from 'react'
import style from './cards.module.css'
import {Card , CardContent ,Typography ,Grid } from '@material-ui/core'
import CountUp from 'react-countup'
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    // console.log('props',confirmed.value)
    // {data:{confirmed,recovered,deaths,lastUpdate}}
    if(!confirmed){
        return 'Loding...'
    }
    return (
         <div className={style.container}>
             <Grid container spacing={3} justify="center">
               <Grid item component={Card} >
                   <CardContent>
                       <Typography color='textSecondary' gutterBottom> infected</Typography>
                       <Typography variant='h5'>
                         <CountUp start={0} end={confirmed.value} duration={2.5} separator=','></CountUp>
                       </Typography>
                       <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography variant='body2'>number of active case of COVID-19</Typography>
                   </CardContent>
               </Grid>
             </Grid>
         </div>
    )
}
export default Cards