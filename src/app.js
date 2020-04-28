import React ,{Component} from 'react'

import {Cards , Charts , CountyPicker } from './component'

class App  extends Component {
    render(){
        return (<div> hi
            <Cards/> 
            <CountyPicker/>
             <Charts/>
        </div>)
    }
}
export default App