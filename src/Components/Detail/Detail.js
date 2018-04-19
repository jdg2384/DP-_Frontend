import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
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
const products = [];
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
                products.push({
                  id: item.id,
                  title: item.title,
                  organization: item.org_name,
                  person: item.owner_name,
                  stage:item.stage_id,
                });
            })
        }
    }
    
    render() {
        //console.log('Detail props', this.props.checkListId)
        return (
            <div>
                 <Link to="/checklist">
                    <BootstrapTable onClick={() => this.props.checkListId()} data={ products } striped={ true } hover={ true } >
                        <TableHeaderColumn  dataField='id' isKey={ true }>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
                        <TableHeaderColumn dataField='organization'>Organization</TableHeaderColumn>
                        <TableHeaderColumn dataField='person'>Lead Person</TableHeaderColumn>
                        <TableHeaderColumn dataField='stage'>Stage</TableHeaderColumn>
                    </BootstrapTable>
                </Link>
                {this.renderList()}
                
            </div>
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