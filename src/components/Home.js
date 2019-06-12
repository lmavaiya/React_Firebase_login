import React, { Component } from 'react'
import fire from '../config/fire';

export default class Home extends Component {

    constructor(){
        super();
        this.state = {
        }

        this.logout = this.logout.bind(this);
    }

    logout(e){
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                Home
                <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.logout}
                    >Logout</button>
            </div>
        )
    }
}
