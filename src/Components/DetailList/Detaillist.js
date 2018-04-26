import React, { Component } from 'react';
import './Detaillist.css';
import Detail from '../Detail/Detail.js';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

class Detaillist extends Component {
  render() {
    return (
      <div className="">
        <Detail/>
      </div>
    );
  }
}

export default Detaillist;
