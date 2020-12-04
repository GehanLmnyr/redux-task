import { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {PostUser} from '../actions'
 class UsersComponent extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            age:'',
        }
    }
 
    getRegisterData =(e)=>{
        
        this.setState({[e.target.name]:e.target.value})
        
    }

    sendData=()=>{
        this.props.PostUser(this.state)
        this.props.history.replace("/user")
    }
    render() {
        return (
            <div className="card p-5 m-auto">
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="enter your name" className="form-control"
                        value={this.state.name} name="name" onChange={this.getRegisterData}/>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="enter your email" className="form-control"
                         value={this.state.email} name="email" onChange={this.getRegisterData} />
                    </div>
                    <div class="form-group">
                    <input type="text" className="form-control" placeholder="enter your age" 
                     value={this.state.age} name="age" onChange={this.getRegisterData}/>
                    </div>
                    <button type="button" className="btn btn-primary btn-block w-50 mx-auto"
                    onClick={this.sendData}>Register</button>
                </form>
            </div>
        )
    }
}

const mapDispatsh=(dispatch)=>{
    
    return bindActionCreators({PostUser},dispatch)
}

export default connect(null,mapDispatsh)(UsersComponent)