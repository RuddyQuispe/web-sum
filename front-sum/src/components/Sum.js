import React, { Component } from 'react'
import axios from 'axios';

export default class Sum extends Component {

    state = {
        first_value: -1,
        second_value: -1,
        sum_result: -1
    }


    handleFirstValue = (e) => {
        // console.log(e.target.value);
        this.setState({ first_value: e.target.value });
    }

    handleSecondValue = (e) => {
        // console.log(e.target.value);
        this.setState({ second_value: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        let response = await axios.post('http://localhost:5000/sum_web', {
            first_value: this.state.first_value,
            second_value: this.state.second_value
        });
        if (response.status == 200) {
            alert(response.data.result);
        } else {
            alert("Error Server");
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" onChange={this.handleFirstValue} placeholder="input a value" />
                    <br />
                    <input type="number" onChange={this.handleSecondValue} placeholder="input other value" />
                    <br />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        )
    }
}
