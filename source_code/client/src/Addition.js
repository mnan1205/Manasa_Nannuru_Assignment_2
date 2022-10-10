import React from 'react';

class Addition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: null,
            secondNumber: null
        };
    }
    //Function to be called when user makes a change
    myChangeHandler = (event) => {
        debugger;
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val }); //nam becomes a computed property.
        // so it will not set "nam" instead will see the value of nam then set stuff,
    }
    // To be called after user clicks on submit.
    mySubmitHandler = (event) => {

        event.preventDefault(); // prevent default behaviour
        //Constructing URL to send to the server.
        const url = `http://localhost:5000/add?a=${this.state.firstNumber}&b=${this.state.secondNumber}`
        fetch(url).then(result =>
            result.json()
        ).then(data => {
            // console.log(data.sum);
            this.setState({ queryResult: data.sum })
        });
    }

    render() {
        return (
            <div className="addition" style={{ "padding": "30px" }}>
                <div className="row"><div className="col">
                    <form onSubmit={this.mySubmitHandler}>
                        <div className="form-group">
                            <label htmlFor="firstNumber">Enter First Number</label>
                            <input
                                style={{ width: "min-content" }}
                                type="number"
                                name="firstNumber"
                                id="firstNumber"
                                className="form-control"
                                onChange={this.myChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="secondNumber">Enter Second Number</label>
                            <input
                                style={{ width: "min-content" }}
                                type="number"
                                name="secondNumber"
                                id="secondNumber"
                                className="form-control"
                                onChange={this.myChangeHandler} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                </div>

                <div className="row" style={{ "padding": "10px" }}>
                    <div className="col"><div> Addition Result : {this.state.queryResult} </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Addition;