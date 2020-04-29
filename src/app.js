import React ,{Component} from 'react'

import {Cards , Charts , CountyPicker } from './component'
import style from './App.module.css'
import {fechData} from './Api' 
class App  extends Component {
    state = {
        data:{}
    }
    async componentDidMount(){
        const newData = await fechData()
        console.log(newData)
        this.setState({data:newData})
    }
    render(){
        return (<div className={style.container} > 
        {console.log(this.state.data)}
            <Cards data={this.state.data}/> 
           
            <CountyPicker/>
             <Charts/>
        </div>)
    }
}
export default App