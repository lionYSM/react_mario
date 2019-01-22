import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import DateAndTimePickers from "./DateAndTimePickers";
import TextField from "@material-ui/core/TextField";

class AddAttendance extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.createProject(this.state);
  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">출석부기록</h5>

          <DateAndTimePickers />

          <div className="input-field">
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="content">하고싶은말</label>
          </div>

          <TextField
            id="datetime-local"
            label="라벨2"
            type="text"
            defaultValue="블라 블라 .."
            InputLabelProps={{
              shrink: true
            }}
          />

          <div className="input-field">
            <button className="btn pink lighten-1">저장</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddAttendance);
