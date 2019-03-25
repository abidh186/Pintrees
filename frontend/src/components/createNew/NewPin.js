import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/NewPin.css";

class NewPin extends Component {
  state = {
    title: "",
    description: "",
    webpage_url: "",
    pinimg_url: "",
    board_id: "",
    pinMessage: "added a photo to website",
    missingBoard: false,
    missingImg: false,
    missingTitle: false
  };

  componentDidMount = () => {
    let id = this.props.currentUser.id;
    this.props.getBoardsById(id);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      missingBoard: false,
      missingImg: false,
      missingTitle: false
    });
  };

  dragAndDropFile = event => {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      this.setState({
        missingImg: false,
        pinimg_url: fileReader.result
      });
    });
    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  removeImg = e => {
    e.preventDefault();
    this.setState({
      pinimg_url: ""
    });
  };

  executeCreatePin = async data => {
    let { currentUser } = this.props;
    await this.props.createPin(data);
    await this.props.history.push(`/${currentUser.email}/pins`);
  };

  onSubmitPinForm = async event => {
    event.preventDefault();
    let { title, description, webpage_url, pinimg_url, board_id } = this.state;
    if (pinimg_url === "") {
      return this.setState({
        missingImg: true,
        missingBoard: false,
        missingTitle: false
      });
    } else if (board_id === "" || board_id === "Select Board") {
      return this.setState({
        missingBoard: true,
        missingTitle: false,
        missingImg: false
      });
    } else if (title === "") {
      return this.setState({
        missingImg: false,
        missingBoard: false,
        missingTitle: true
      });
    }
    let boardId = parseInt(board_id, 10);
    let pinData = {
      user_id: this.props.currentUser.id,
      board_id: boardId,
      title: title,
      description: description,
      webpage_url: webpage_url,
      pinimg_url: pinimg_url
    };

    this.setState({
      title: "",
      description: "",
      webpage_url: "",
      pinimg_url: "",
      board_id: ""
    });

    return this.executeCreatePin(pinData);
  };

  displayOptionBoardSelectForm = () => {
    let userBoards = Object.values(this.props.boards);
    return userBoards.map(board => {
      if (board.title) {
        return (
          <option key={board.id} value={parseInt(board.id, 10)}>
            {board.title}
          </option>
        );
      } else {
        return null;
      }
    });
  };

  render() {
    console.log(this.state);
    if (!Object.values(this.props.boards).length) return null;
    return (
      <div className="new-pin-parent">
        <NavLink
          className="back-from-new-pin"
          to={`/${this.props.currentUser.email}/`}
        >
          <i className="fas fa-chevron-left" />
          <p>Back</p>
        </NavLink>
        <div className="new-pin-display">
          <div className="submit-button-div">
            {this.state.missingBoard ? (
              <p className="post-pin-error">Please select a Board</p>
            ) : null}
            {this.state.missingImg ? (
              <p className="post-pin-error">Please upload an Image</p>
            ) : null}
            {this.state.missingTitle ? (
              <p className="post-pin-error">Please provide a Title</p>
            ) : null}
            <button
              className="submit-button"
              onClick={this.onSubmitPinForm}
              type="submit"
            >
              <i className="fas fa-thumbtack" />
              Save
            </button>
          </div>
          <br />
          <div className="pin-form-container">
            <div className="img-file-display">
              <div className="new-img-div">
                {this.state.pinimg_url ? (
                  <img
                    onClick={this.removeImg}
                    className="dragAndDropImage"
                    src={this.state.pinimg_url}
                    alt=""
                  />
                ) : (
                  <div className="upload-message">
                    <input
                      required
                      id="file"
                      type="file"
                      className="inputfile"
                      accept="image/*"
                      onChange={this.dragAndDropFile}
                    />
                    <label htmlFor="file">Upload Tree</label>
                  </div>
                )}
              </div>
            </div>
            <div className="pin-form-div">
              <form className="pin-form">
                <input
                  required
                  className="title-input"
                  onChange={this.handleChange}
                  type="text"
                  value={this.state.title}
                  name="title"
                  placeholder="Add a title"
                />
                <br />
                <textarea
                  className="desc-input"
                  onChange={this.handleChange}
                  type="text"
                  value={this.state.description}
                  name="description"
                  placeholder="Say more about this Tree"
                />
                <br />
                <input
                  className="url-input"
                  onChange={this.handleChange}
                  type="text"
                  value={this.state.webpage_url}
                  name="webpage_url"
                  placeholder="Add the URL this pin links to"
                />
                <br />
                <select
                  className="board-picker"
                  onChange={this.handleChange}
                  name="board_id"
                >
                  <option>Select Board</option>
                  {this.displayOptionBoardSelectForm()}
                </select>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPin;
