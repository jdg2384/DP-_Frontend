import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
//Router
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
// Redux Imports
import {
  pipeDriveGetRequest,
  checkListId
} from '../../Actions';
class Detail extends Component {
    componentDidMount() {
        this.props.pipeDriveGetRequest()
        this.props.checkListId()
    }
    renderList=()=>{
        // Pipedrive Api request object
        let pipeDriveApi = this.props.pipe.pipe.data;
        if(!pipeDriveApi){return <div>Loading...</div>}
        else{
            return pipeDriveApi.map(item => {
                const routeName = item.title.match(/[a-zA-Z]/gi).join('')
                return(  
                        <tr key={item.id}>
                            <Link to={`/checklist/${routeName}/${item.id}`}>
                                <td>{item.id}</td> 
                            </Link>
                            <td>{item.title}</td>
                            <td>{item.org_name}</td>
                            <td>{item.stage_id}</td>
                        </tr>
                )
            })
        }
    }
    
    render() {
        return (
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Organization</th>
                        <th>Stage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </Table>
            );
        }
}

const mapStateToProps = state => {
  let pipe = state.checkList
  let checkId = state.checkList
  return { pipe, checkId} ;
};

export default connect(mapStateToProps, {
  pipeDriveGetRequest,
  checkListId
})(Detail);

<Table striped bordered condensed hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>;

