// Redux Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
// CSS
import { Checkbox } from 'react-bootstrap';
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
    checkListPost,
    checkListPatch,
    updatePropertyPatch,
} from '../../Actions';

class CheckListPatch extends Component {
    
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('this state = ', this.props.newObj.size_viable)
    //     console.log('next props ==>', nextProps.newObj.size_viable)
    //     // console.log('key',this.props.newObj.size_viable == nextProps.newObj.size_viable)
    //     return this.props.newObj.size_viable !== nextProps.newObj.size_viable
    // //    retrun this.props.newObj.size_viable !== nextProps.newObj.size_viable
    // //        this.forceUpdate()
    // //    } 
      
    // }
    
    renderList=(props)=>{
        let pipeInfo = this.props.one.data;
        let pipeDriveApiOne = this.props.one; //this.props.one.data
        let dp = this.props.dp_info;
        console.log('dp',dp)
        if(!pipeDriveApiOne){return <div>Loading...</div>}
        else{
            //this.props.updatePropertyPatch(this.props.dp_info)
            return <div><h1>Workflow Patch</h1>
            <br/><br/>
            <div className="container">
                <div className="row">
                <div className="col-lg-4 text-left blah">
                <div className="" 
                    onClick={()=> this.props.updatePipeDriveId(pipeDriveApiOne.id)}>
                    <h4>ID: {pipeDriveApiOne.id}</h4>
                    <h4>Deal Title: {pipeDriveApiOne.title}</h4>
                    {/* pipeDriveApiOne.org_id.name */}
                    <h4>Organization: {pipeDriveApiOne.org_name}</h4>
                    <h4>Deal Lead: {pipeDriveApiOne.owner_name}</h4>
                </div>
                </div>
                <div className="col-lg-4"></div>
                <div className="col-lg-4"></div>
                <br/><br/>
                    <div className="col-lg-12 text-left">
                        <form>
                        <div className="form-group">
                            <h1>Lead</h1>
                            <h2>Qualify Lead as Current Opportunity (Sales)</h2>
                            <br/><br/>
                            <h5>Application</h5>
                            <input type="text" className="form-control" 
                                id="Application" 
                                defaultValue={dp.application} 
                                onChange={(event) => { 
                                this.props.checkListPatch(pipeDriveApiOne.id,{'application': event.target.value })}
                            }/>
                            <h5>Product/Project Name</h5>
                            <input type="text" className="form-control" 
                            id="product_name" 
                            defaultValue={dp.product_name}
                            onChange={(event) => { 
                            this.props.checkListPatch(pipeDriveApiOne.id,{'product_name': event.target.value })}
                            }/>
                            <h5>cellular Tech</h5>
                            <select className="form-control"
                            id="cellular_tech" 
                            defaultValue={dp.cellular_tech}
                            onChange={(event) => { 
                            this.props.checkListPatch(pipeDriveApiOne.id,{'cellular_tech': event.target.value })}
                            }>
                                <option>LTE CAT-1 Single Antenna</option>
                                <option>LTE CAT-1 Dual Antenna</option>
                                <option>LTE CAT-M1</option>
                                <option>NB-IoT</option>
                                <option>3G</option>
                                <option>2G</option>
                                <option>Other</option>
                            </select>
                            <h5>Cellular Bands</h5>
                            <select className="form-control"
                            id="cellular_bands" 
                            defaultValue={dp.cellular_bands}
                            onChange={(event) => { 
                            this.props.checkListPatch(pipeDriveApiOne.id,{'cellular_bands': event.target.value })}
                            }>
                                <option>ATT/Tmobile (PTCRB)</option>
                                <option>Verizon</option>
                                <option>Vodafone</option>
                                <option>Other / Undecided</option>
                            </select>
                            
                            <br/><br/>
                            {/* CHECKBOX Size Viable*/}
                            <input 
                                type="checkbox" 
                                id="size_viable"
                                defaultChecked={this.props.newObj.size_viable}
                                onChange={(event)=> {console.log('event target checked', 
                                event.target.checked), this.props.checkListPatch(pipeDriveApiOne.id, 
                                {'size_viable': event.target.checked })}}
                            />
                                   
                            <strong> Size Viable for Chosen Bands</strong>
                            <h1>Opportunity</h1>
                            <h2>Start MNDA Process (Sales)</h2>
                            <br/><br/>
                            <h5>Organization Name</h5>
                            <input type="text" className="form-control" 
                                id="org_name" 
                                defaultValue={dp.org_name}
                                onChange={(event) => { 
                                this.props.checkListPatch(pipeDriveApiOne.id,{'org_name': event.target.value })}
                            }/>
                            <h5>Lead Person Name</h5>
                            <input type="text" className="form-control" 
                                id="lead_person"
                                defaultValue={dp.lead_person}
                                onChange={(event) => { 
                                this.props.checkListPatch(pipeDriveApiOne.id,{'lead_person': event.target.value })}
                            } 
                            />
                            <h5>Lead Person Email</h5>
                            <input type="email" className="form-control" 
                                id="lead_email" 
                                defaultValue={dp.lead_email}
                                onChange={(event) => {console.log('event target checked', event.target.value),this.props.checkListPatch(pipeDriveApiOne.id,{'lead_email': event.target.value })}
                            }/>
                            <br/><br/>
                            {/* CHECKBOX */}
                            <input 
                                type="checkbox" 
                                id="org_person_email"
                                defaultChecked={this.props.newObj.org_person_email}
                                onChange={(event)=> {console.log('event target checked', event.target.checked), this.props.checkListPatch(pipeDriveApiOne.id,{'org_person_email': event.target.checked })}}
                            />

                            <strong>  Organization, Lead Person, and Email are Correct. Ready to Start MNDA Process.</strong>
                            <br/><br/>
                            <h5><strong>Manual Steps</strong></h5>
                            <ol>
                                <li><h5>Click PandaDoc Plugin in Pipedrive</h5></li>
                                <li><h5>Confirm Recipient and Salesperson</h5></li>
                                <li><h5>Create MNDA Doc</h5></li>
                                <li><h5>Change Doc Title Field to Legal Name</h5></li>
                            </ol>
                            <br/><br/>
                            {/* CHECKBOX MNDA STARTED */}
                            <input 
                                type="checkbox" 
                                id="mnda_started"
                                defaultChecked={this.props.newObj.mnda_started}
                                onChange={(event)=> {console.log('event target checked', 
                                event.target.checked), this.props.checkListPatch(pipeDriveApiOne.id, 
                                {'mnda_started': event.target.checked })}}
                            />
                            <strong>  MNDA Process Has Been Started</strong>
                            
                            
                            <h2>Archive MNDA (Legal Admin)</h2>
                            {/* CHECKBOX MNDA STARTED */}
                            <input 
                                type="checkbox" 
                                id="mnda_archived"
                                defaultChecked={this.props.newObj.mnda_archived}
                                onChange={(event)=> {console.log('event target checked', 
                                event.target.checked), this.props.checkListPatch(pipeDriveApiOne.id, 
                                {'mnda_archived': event.target.checked })}}
                            />
                            <strong>  MNDA Has Been Archived</strong>
                        </div>
                        {/* <input 
                            
                            onClick={()=> this.props.updatePipeDriveId({prop:'pipedrive_id',value: pipeDriveApiOne.id})} 
                            onClick={()=> this.props.checkListPatch(pipeDriveApiOne.id,this.props.newObj)} 
                            className="btn btn-default" type="submit" defaultValue="Edit"
                        /> */}
                        </form>
                    </div>
                </div>
            </div>
    </div>

        }
        //this.props.updatePipeDriveId(pipeDriveApiOne.id)
    }
    
    render() {
        console.log('newObj.size_viable',this.props.newObj.size_viable)
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}
const mapStateToProps = state => {
    let {one, pipe} = state.checkList
    let obj = state.data
    let newObj = state.info
    //console.log('state', newObj)
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
        obj,
        newObj
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
    updatePropertyPatch,
})(CheckListPatch);
