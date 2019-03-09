import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { apiKey } from "./config.json";
import axios from "axios";

const Main = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
`;
const Title = styled.h1`
  color: white;
  text-align: center;
`;
const ErrorMessage = styled.h1`
  color: rgb(204, 42, 56);
  text-align: center;
`;
const GifImg = styled.img`
  position: relative;
  max-height: 80vh;
  max-width: 100vw;
  object-fit: cover;
  object-position: center;
  left: 50%;
  transform: translateX(-50%);
`;
const LinkWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;
const ReturnHomeLink = styled(Link)`
  color: white;
  &:visited {
    color: white;
  }
`;

class GifPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlStart: "https://api.giphy.com/v1/gifs/"
    };

    this.getGif = this.getGif.bind(this);
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.getGif(id);
  };
  componentDidUpdate = () => {
    !this.state.id &&
      !this.state.error &&
      this.getGif(this.props.match.params.id);
  };
  static getDerivedStateFromProps = (nextProps, state) => {
    if (
      nextProps.match &&
      nextProps.match.params &&
      nextProps.match.params.id !== state.id &&
      !state.error
    ) {
      return {
        id: null
      };
    }
    return null;
  };
  getGif = id => {
    let url = this.state.urlStart + id + "?api_key=" + apiKey;
    axios
      .get(url)
      .then(({ data }) => {
        this.setState({
          gifUrl: data.data.images.original.url,
          id: data.data.id,
          title: data.data.title
        });
      })
      .catch(err => {
        this.setState({ error: "GIF not found", id: id });
      });
  };
  render() {
    return (
      <Main>
        <Title>{this.state.title}</Title>
        <GifImg src={this.state.gifUrl} alt="" />
        {this.state.error && <ErrorMessage>{this.state.error}</ErrorMessage>}
        <LinkWrapper>
          <ReturnHomeLink to="/">Go back</ReturnHomeLink>
        </LinkWrapper>
      </Main>
    );
  }
}

export default GifPage;
