import React ,{Component} from 'react'

import {Cards , Charts , CountyPicker } from './component'
import style from './App.module.css'
import {fechData } from './Api' 
class App  extends Component {
    state = {
        data:{},
        country:''
    }
    async componentDidMount(){
        const newData = await fechData()
        
        this.setState({data:newData})
    }
    handleChange = async (cuntry) =>{
        const newData = await fechData(cuntry)
        
        this.setState({data:newData ,country:cuntry})
         console.log(cuntry)
    }
    render(){
        const { data , country} = this.state
        return (<div className={style.container} > 
        {console.log(this.state.data)}
            <Cards data={this.state.data}/> 
           
            <CountyPicker handleChange={this.handleChange}/>
             <Charts  data={data } country={country}/>
        </div>)
    }
}
export default App