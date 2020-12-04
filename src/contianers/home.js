
import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserByName, getUser } from '../actions'


class UsersDetailsComponent extends Component {
    constructor() {
        super();
        this.state = {
            keywords: ''
        }
    }

    renderList = () => {
        const users = this.props.userList.list
        if (users) {
            return users.map((user, index) => {
                return (
                    <div key={index} className="card border-0 w-100 p-4 row">
                        <div className="border border-primary text-left mx-auto p-4 w-100">
                            <h2>User Name : <span className="text-primary  ">{user.name}</span></h2>
                            <h2>User Email : <span className="text-primary  ">{user.email}</span></h2>
                            <h2>User Age : <span className="text-primary  ">{user.age}</span></h2>
                        </div>
                    </div>
                )
            })
        }
        return (
            <div>
                <h1 className="alert alert-danger">NO Users avilable</h1>
            </div>
        )
    }

    searchByName = () => {
        console.log(this.state.keywords)
        this.props.getUserByName(this.state.keywords)
    }
    render() {

        return (
            <div className="text-center" >
                <form className="form-group d-flex">
                    <div className="form-group m-auto">
                        <input type="text"
                            placeholder="search by name"
                            className="form-control m-auto"
                            value={this.state.keywords}
                            onChange={(e) => {
                                this.setState({ keywords: e.target.value })
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="button"
                            value="search"
                            className="btn btn-light ml-2 mt-3"
                            onClick={this.searchByName}
                        />  
                    </div>
                    <div className="form-group">
                        <input
                            type="button"
                            value="register"
                            className="btn btn-primary ml-2 mt-3"
                            onClick={
                                () => {
                                    this.props.history.push("/register")

                                }
                            }
                        />  
                    </div>
                </form>

                {this.renderList()}
            </div>
        )
    }

    componentDidMount() {
        this.props.getUser()
    }
}



const mapDispatchToPrp = (dispatch) => {
    return bindActionCreators({ getUserByName, getUser }, dispatch)
}

const mapState = (state) => {
    console.log(state, "NEWSTATE")
    return {
        userList: state.userReducers
    }

}
export default connect(mapState, mapDispatchToPrp)(UsersDetailsComponent)


