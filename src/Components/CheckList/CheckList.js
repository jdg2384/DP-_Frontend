// Redux Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckListPost from './checkListPost'
import CheckListPatch from './checkListPatch'
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './CheckList.css';
// Redux Actions
import {
    dpGetOne,
    updatePipeDriveId,
    updateProperty,
    checkListId,
    pipeDriveGetRequest,
    pipeDriveGetOne,
    checkListGetOne,
    checkListPost,
    checkListPatch,
} from '../../Actions';

class CheckList extends Component {
    componentDidMount() {
        const urlPath = this.props.history.location.pathname.match(/[0-9]/gi).join('');
        this.props.pipeDriveGetRequest(),
        this.props.dpGetOne(urlPath),
        this.props.pipeDriveGetOne(urlPath)
        this.props.updatePipeDriveId(urlPath)
    }

    renderList=()=>{
        let pipeDriveApiOne = this.props.one.data;
        if(!pipeDriveApiOne){return <div>Loading...</div>}
        else if (!this.props.dp_info.id){return <CheckListPost/>}
        else{return<CheckListPatch/>}
        this.props.updatePipeDriveId(pipeDriveApiOne.id)
    }
    
    render() {
        //console.log('checklist', this.props)
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}
const mapStateToProps = state => {
    //console.log('state', state.data)
    let {one, pipe} = state.checkList
    let obj = state.data
    let {
        dp_info, 
        pipedrive_id,
        application, 
        product_name, 
        cellular_tech, 
        cellular_bands, 
        size_viable, 
        org_name, 
        lead_person, 
        lead_email, 
        org_person_email,
        mnda_started,
        mnda_archived,
    } = state.data

    return { 
        dp_info,
        pipedrive_id,
        pipe, 
        one, 
        application, 
        product_name, 
        cellular_tech, 
        cellular_bands, 
        size_viable, 
        org_name, 
        lead_person, 
        lead_email, 
        org_person_email,
        mnda_started,
        mnda_archived,
        obj
    };
};

export default connect(mapStateToProps, {
    dpGetOne,
    updatePipeDriveId,
    updateProperty,
    checkListId,
    pipeDriveGetRequest,
    pipeDriveGetOne,
    checkListPost,
    checkListPatch,
})(CheckList);
