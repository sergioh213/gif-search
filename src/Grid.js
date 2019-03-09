import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    gifs: state.gifs
  };
};

const GifImg = styled.img`
  height: 100px;
  width: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    transform: scale(1.07);
  }
`;
const GridWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
const GridBody = styled.div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  width: 620px;
  max-width: 90vw;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
`;
const MoreButton = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  color: #61e2a8;
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 20px;
`;
const Message = styled.div`
  color: #61e2a8;
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountToShow: 6,
      buttonText: "show more"
    };
  }
  showMore = () => {
    if (this.state.amountToShow + 6 >= this.props.gifs.length) {
      this.setState({
        amountToShow: this.state.amountToShow + 6,
        buttonText:
          "No more results. To see more results, change your settings."
      });
    } else {
      this.setState({ amountToShow: this.state.amountToShow + 6 });
    }
  };
  render() {
    return (
      <GridWrapper>
        <GridBody id="grid">
          {this.props.gifs &&
            this.props.gifs.map((item, index) => {
              if (index < this.state.amountToShow) {
                return (
                  <Link to={`/${item.id}`} key={item.id}>
                    <GifImg
                      className="grid-element"
                      src={item.images.fixed_height.url}
                      alt=""
                    />
                  </Link>
                );
              } else return null;
            })}
        </GridBody>

        {!this.props.gifs || this.props.gifs.length === 0 ? (
          <Message>No gifs found</Message>
        ) : (
          <MoreButton onClick={this.showMore}>
            {this.state.buttonText}
          </MoreButton>
        )}
      </GridWrapper>
    );
  }
}

export default connect(mapStateToProps)(Grid);
