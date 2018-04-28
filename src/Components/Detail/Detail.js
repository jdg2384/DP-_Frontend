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
                console.log(item)
                if(item.stage_id === 2 || item.stage_id === 3 || item.stage_id === 4 ){
                    const routeName = item.title.match(/[a-zA-Z]/gi).join('')
                return(  
                        <tr className="text-left" key={item.id}>
                            <Link to={`/checklist/${routeName}/${item.id}`}>
                                <td className="tdId">{item.id}</td> 
                            </Link>
                            <td className="tdTitle">{item.title}</td>
                            <td>{item.org_name}</td>
                            <td>{item.person_name}</td>
                            <td>{item.owner_name}</td>
                            <td>{item.stage_id}</td>
                        </tr>
                )
                }
            })
        }
    }
    
    render() {
        return (
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                        <th className="idId">ID</th>
                        <th className="idTitle">Title</th>
                        <th>Organization</th>
                        <th>Lead Person</th>
                        <th>Sales Person</th>
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


