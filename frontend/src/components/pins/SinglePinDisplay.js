import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/SinglePinDisplay.css";

export class SinglePinDisplay extends React.Component {
  componentDidMount = () => {
    let user_id = this.props.currentUser.id;
    this.props.getBoardsById(user_id);
    let id = this.props.match.params.id;
    this.props.fetchSinglePin(id);
  };

  state = {
    board_id: "",
    isSubmitted: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  checkForBoards = () => {
    let { boards } = this.props;
    let filteredBoards = boards.filter(board => {
      return board.title !== undefined;
    });
    return !!filteredBoards.length;
  };

  onSubmitPinForm = event => {
    event.preventDefault();
    let { boards } = this.props;
    let filteredBoards = boards.filter(board => {
      return board.title !== undefined;
    });
    if (!filteredBoards.length) {
      return this.setState({
        hasBoards: false
      });
    }
    let { board_id } = this.state;
    let boardId = parseInt(board_id, 10);
    if (!board_id) {
      boardId = filteredBoards[0].id;
    }
    let { title, pinimg_url, id, description, webpage_url } = this.props.pin;
    let pinData = {
      user_id: this.props.currentUser.id,
      board_id: boardId,
      title: title,
      description: description,
      webpage_url: webpage_url,
      pinimg_url: pinimg_url
    };

    this.setState({
      isSubmitted: true
    });

    return this.props.createPin(pinData);
  };

  displayOptionBoardSelectForm = () => {
    let userBoards = this.props.boards;
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

  showSaveOption = () => {
    let { isSubmitted } = this.state;
    if (isSubmitted) {
      return <p className="pin-saved-message">Pin Saved</p>;
    } else {
      return (
        <div className="save-pin-form">
          <div className="select-div">
            <select
              className="board-picker-save-pin"
              onChange={this.handleChange}
              name="board_id"
            >
              {this.displayOptionBoardSelectForm()}
            </select>
          </div>
          <div className="submit-button-div">
            <button
              className="submit-button-save"
              onClick={this.onSubmitPinForm}
              type="submit"
            >
              <i className="fas fa-thumbtack" />
              Save
            </button>
          </div>
        </div>
      );
    }
  };

  render() {
    // debugger;
    if (!this.props.pin) return null;
    // let { boards } = this.props;
    // let { hasBoards } = this.state;
    let { title, pinimg_url, id, description } = this.props.pin;
    return (
      <div className="pin-display-parent">
        <NavLink className="back-from-pin" to={"/"}>
          <i className="fas fa-chevron-left" />
          <p>Back</p>
        </NavLink>
        <div className="pin-display-modal">
          <div className="pin-img-div">
            <img src={pinimg_url} alt="" />
          </div>
          <div className="pin-info-div">
            {this.checkForBoards() ? (
              this.showSaveOption()
            ) : (
              <p className="pin-saved-message">
                Please Create a Board to Save this Pin
              </p>
            )}
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}
