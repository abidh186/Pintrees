import React, { Component } from "react";

class NewBoard extends React.Component {

  render(){
    return(
      <div className="createBoardFormContainer">
          <div className="createBoardTitle">
            <h2>Create Board</h2>
          </div>
          <form>
            <div className="titleInput">
              <label>Title</label>
              <input
                className="boardTitleInput"
                onChange={this.handleChange}
                type="text"
                value={this.state.boardTitle}
                name="boardTitle"
                placeholder="Title for board"
              />
            </div>
            <br />
            <div className="createBoardButton">
              <div className="innerBoardButtonDiv">
                <button onClick={this.submitCreateBoardForm} type="submit">
                  Create
                </button>
                <button type="submit">Cancel</button>
              </div>
            </div>
          </form>
          {this.state.addedBoard ? <h3>added a new board</h3> : null}
        </div>
    )
  }
}

export default NewBoard
