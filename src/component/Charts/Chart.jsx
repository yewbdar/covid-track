import React ,{ useEffect ,useState} from "react"
import { fecthDialyData } from '../../Api'
import {Line , Bar } from 'react-chartjs-2'
import style from './chart.module.css'
import { interfaceExtends } from "@babel/types"
const Chart = () =>{
     const [dailyData , setDailyData] = useState([])

    useEffect(() => {
         const fetchApi = async () => {
           setDailyData(await fecthDialyData())
         }
        console.log(dailyData)
         fetchApi();
        
    })

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
    return (
        <div className={style.container}>
            {lineChart}
        </div>
    )
}

export default Chart