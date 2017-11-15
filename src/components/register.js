import React, { Component } from 'react';

class Register extends Component {
    constructor(props){
        super(props)
        this.state={};
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="card">
                            <div className="text-center card-title">
                                <h1>Register</h1>
                            </div>
                            <div class="card-body">
                                <form className="d-flex flex-column">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input onChange={this.handleInputChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input onChange={this.handleInputChange} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <button type="submit" class="btn btn-primary text-center">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

export default Register;