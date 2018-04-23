import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
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
            const routeName = item.title.match(/[a-zA-Z]/gi).join('')
               return   <Link to={`/checklist/${routeName}/${item.id}`}>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">id</th>
                                        <th scope="col">title</th>
                                        <th scope="col">Organization</th>
                                        <th scope="col">Stage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.title}</td>
                                        <td>{item.org_name}</td>
                                        <td>{item.stage_order_nr}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Link>
            })
        }
    }
    
    render() {
        console.log('Detail props', this.props.checkListId)
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
  let pipe = state.checkList
  console.log(pipe)
  let checkId = state.checkList
  return { pipe, checkId} ;
};

export default connect(mapStateToProps, {
  pipeDriveGetRequest,
  checkListId
})(Detail);

