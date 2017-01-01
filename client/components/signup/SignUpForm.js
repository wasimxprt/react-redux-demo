import React, { Component } from 'react';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState( { [e.target.name]: e.target.value} );
    }


    render() {
        return (
            <form>
                <h1>Join Our Community</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Enter username"
                        value={this.state.username}
                        onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg" > Sign Up </button>
                </div>
            </form>
        );
    }
}

export default SignUpForm;