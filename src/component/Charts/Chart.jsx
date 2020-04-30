import React ,{ useEffect ,useState} from "react"
import { fecthDialyData , fethchDataByCountry } from '../../Api'
import {Line , Bar } from 'react-chartjs-2'
import style from './chart.module.css'
import { interfaceExtends } from "@babel/types"
const Chart = (props) =>{
  const {data:{confirmed , recovered, deaths} , country} = props;
 
     const [dailyData , setDailyData] = useState([])

    useEffect(() => {
         const fetchApi = async () => {
           setDailyData(await fecthDialyData())
         }
        // console.log(dailyData)
         fetchApi();
        
    },[])

    const lineChart = (
        dailyData.length?
        (<Line 
          data={{
              labels:dailyData.map(({date})=> date),
              datasets:[{
                  data:dailyData.map(({confirmed})=> confirmed),
                  label:'infected',
                  borderColor:'#3333ff',
                  fill:true

              },{
                data:dailyData.map(({deaths})=> deaths),
                label:'deaths',
                borderColor:'red',
                backgroundColor:'rgba(225,0,0,0.5)',
                fill:true

              }]
          }}
        />
        ):null)

        const BarChart = (
          
          confirmed? (
            <Bar 
               data={{
                 labels:['confirmed', 'recovered','deaths'],
                 datasets:[{
                   label:'people',
                   backgroundColor:['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
                   data:[confirmed.value , recovered.value, deaths.value]
                 }]
               }}
               options={{
                 legend:{display:false},
                 title:{display:true, title:`current state in ${country}`}
               }}
            />
          ):null
          
        )
    return (
        <div className={style.container}>
            {country  ? BarChart : lineChart}
        </div>
    )
}

export default Chart