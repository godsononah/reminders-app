import React, { Component } from "react";

class TestFormInput extends Component {
    constructor(props) {
        super(props);
        this.textView = React.createRef();
    }

    componentDidMount() {
        this.textView.current.focus();
    }

    render() {
        return (
            <input onChange={this.props.handleEmailChange} value={this.props.emailAddress} type="text" name="emailAddress" ref={this.textView} />
        )
    }
}

export default TestFormInput;