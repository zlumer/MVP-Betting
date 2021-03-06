import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Items from './items';
import Popup from './../elements/popup';
import Wallet from './../../models/wallet';
import { BET_LESS, BET_MORE } from './../../models/consts';

export default class Predict extends Component {
  constructor(opts) {
    super(opts);

    this.state = {
      bets: []
    };
  }

  get myTokens() {
    const { tokens } = this.props;
    const userAccount = Wallet.getUserAccount();

    return tokens.filter(token => {
      return token.ownerToken.toLowerCase() == userAccount.toLowerCase();
    });
  }

  render() {
    return (
      <Wrapper onClose={this.props.onClose} name="bids" className="bids-list toggleable">
        <h1>Your Bids List</h1>
        <Container>
          <Items bets={this.myTokens} />
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled(Popup)`
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
  display: flex !important;
  flex-direction: column;
`;

const Title = styled.div`
  height: auto;
  width: 300px;
  margin: 50px auto 0;
  font-family: 'Montserrat-Regular', Helvetica, Arial, serif;
  font-size: 36px;
  color: rgba(12, 38, 74, 1);
  text-align: center;
`;

const Container = styled.div`
  /* overflow-y: auto; */
  padding-bottom: 30px;
`;
