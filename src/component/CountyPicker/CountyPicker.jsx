import React ,{useState , useEffect} from 'react'
import {NativeSelect , FormControl } from '@material-ui/core'
import {global} from '../../Api'
import style from './countyPicker.module.css'
const CountyPicker = (props) => {
    const [country, setCountry]= useState([]);

    useEffect(() => {
        const countries = async () => {
           setCountry(await global())
        }
        // console.log('countrycountry',country)
         countries()
    },[])
    const countr= country.length?(
        country.map((count,i)=>(<option key= {i} value={count}> {count}</option>))
    ):null
    return (
        <FormControl className={style.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => props.handleChange(e.target.value)}>
            <option  value='global' > Global</option>)
                {countr}
            </NativeSelect>
        </FormControl>
    )
}
export default CountyPicker