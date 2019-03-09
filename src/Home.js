import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import SettingsMenu from "./SettingsMenu";
import Grid from "./Grid";
import { apiKey } from "./config.json";
import { connect } from "react-redux";
import { getGifsBySearchQuery } from "./redux/actions.js";

const mapStateToProps = state => {
  return {
    gifs: state.gifs,
    error: state.error
  };
};

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 0 20px;
`;
const Input = styled.input`
  height: 30px;
  border-radius: 15px;
  border: 1px solid #61e2a8;
  padding: 0 16px;
  font-size: 18px;
  color: #474747;
  width: 300px;
  max-width: 90%;
`;
const SendButton = styled.button`
  border: none;
  background-color: transparent;
`;
const SendIcon = styled.i`
  color: #61e2a8;
  font-size: 26px;
`;
const SettingsIcon = styled.i`
  position: fixed;
  color: lightgrey;
  font-size: 20px;
  right: 20px;
  top: 10px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    transform: scale(1.07);
    color: grey;
  }
`;
const ErrorMessage = styled.div`
  color: rgb(204, 42, 56);
  text-align: center;
  margin-top: 10px;
`;

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlStart: "https://api.giphy.com/v1/gifs/",
      showSettingsMenu: false,
      maxNumberOfResults: 18
    };
  }
  search = () => {
    if (this.state.searchInput && this.state.searchInput !== "") {
      let parsedUserSearch = this.state.searchInput.replace(" ", "+");
      let url =
        this.state.urlStart +
        "search?q=" +
        parsedUserSearch +
        "&api_key=" +
        apiKey +
        "&limit=" +
        this.state.maxNumberOfResults;
      this.props.dispatch(getGifsBySearchQuery(url));
    } else {
      this.setState({ error: "Please search for something" });
    }
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: null
    });
  };
  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.search();
    }
  };
  toggleSettingsMenu = () => {
    this.setState({ showSettingsMenu: !this.state.showSettingsMenu });
  };
  changeMaxNumberOfResults = e => {
    this.setState({ maxNumberOfResults: e.target.value });
  };
  render() {
    return (
      <>
        <SettingsIcon
          className="fas fa-sliders-h"
          onClick={this.toggleSettingsMenu}
        />
        {this.state.showSettingsMenu && (
          <SettingsMenu
            toggleSettingsMenu={this.toggleSettingsMenu}
            maxNumberOfResults={this.state.maxNumberOfResults}
            changeMaxNumberOfResults={this.changeMaxNumberOfResults}
          />
        )}

        <Logo />
        <InputWrapper>
          <Input
            name="searchInput"
            type="text"
            placeholder="Search for GIFs"
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          <SendButton onClick={this.search}>
            <SendIcon className="fas fa-paper-plane" />
          </SendButton>
        </InputWrapper>

        {this.state.error && <ErrorMessage>{this.state.error}</ErrorMessage>}
        {this.props.error && (
          <ErrorMessage>
            Ups, something went wrong. Please try again
          </ErrorMessage>
        )}

        {this.props.gifs && <Grid />}
      </>
    );
  }
}

export default connect(mapStateToProps)(Home);
