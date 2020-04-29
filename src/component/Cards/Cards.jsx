import React from 'react'
import style from './cards.module.css'
import {Card , CardContent ,Typography ,Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    
    if(!confirmed){
        return 'Loding...'
    }
    return (
         <div className={style.container}>
             <Grid container spacing={3} justify="center">
               <Grid item component={Card} xs={12} md={3} className={cx(style.card , style.infected)} >
                   <CardContent>
                       <Typography color='textSecondary' gutterBottom> infected</Typography>
                       <Typography variant='h5'>
                         <CountUp start={0} end={confirmed.value} duration={2.5} separator=','></CountUp>
                       </Typography>
                       <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography variant='body2'>number of active cases of COVID-19</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={cx(style.card , style.recovered)} >
                   <CardContent>
                       <Typography color='textSecondary' gutterBottom> recovered</Typography>
                       <Typography variant='h5'>
                         <CountUp start={0} end={recovered.value} duration={2.5} separator=','></CountUp>
                       </Typography>
                       <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography variant='body2'>number of recovered from  COVID-19</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={cx(style.card , style.deaths)} >
                   <CardContent>
                       <Typography color='textSecondary' gutterBottom> deaths</Typography>
                       <Typography variant='h5'>
                         <CountUp start={0} end={deaths.value} duration={2.5} separator=','></CountUp>
                       </Typography>
                       <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography variant='body2'>number of deaths cases of COVID-19</Typography>
                   </CardContent>
               </Grid>
             </Grid>
         </div>
    )
}
export default Cards