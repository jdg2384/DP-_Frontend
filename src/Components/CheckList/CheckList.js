// Redux Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './CheckList.css';
// Redux Actions
import {
    updatePipeDriveId,
    updateProperty,
    checkListId,
    pipeDriveGetRequest,
    pipeDriveGetOne,
    checkListGetOne,
    checkListPost,
} from '../../Actions';

class CheckList extends Component {
    componentDidMount() {
        this.props.checkListGetOne(1)
        this.props.pipeDriveGetRequest(),
        this.props.pipeDriveGetOne(this.props.history.location.pathname.match(/[0-9]/gi).join(''))
        //this.props.updatePipeDriveId()
    }

    renderList=()=>{
        let pipeDriveApiOne = this.props.one.data;
        if(!pipeDriveApiOne){return <div>Loading...</div>}
        else{
            return <div className="" 
                        onClick={()=> this.props.updatePipeDriveId(pipeDriveApiOne.id)}>
                        <h4>ID: {pipeDriveApiOne.id}</h4>
                        <h4>Deal Title: {pipeDriveApiOne.title}</h4>
                        <h4>Organization: {pipeDriveApiOne.org_id.name}</h4>
                        <h4>Deal Lead: {pipeDriveApiOne.owner_name}</h4>
                    </div>
        }
        this.props.updatePipeDriveId(pipeDriveApiOne.id)
    }
    
    renderClick=()=>{
        let pipeDriveApiOne = this.props.one.data;
        if(!pipeDriveApiOne){return <div>Loading...</div>}
        else{ const test = pipeDriveApiOne.id 
        }
    }
    
    render() {
        console.log(this.props.history.location.pathname.match(/[0-9]/gi).join(''))
        return (
            <div>
                <h1>Workflow</h1>
                <br/><br/>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 text-left blah">{this.renderList()}</div>
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
                                    value={this.props.application} 
                                    onChange={(event) => { 
                                    this.props.updateProperty({prop:'application', value: event.target.value })}
                                }/>
                                <h5>Product/Project Name</h5>
                                <input type="text" className="form-control" 
                                id="product_name" 
                                value={this.props.product_name}
                                onChange={(event) => { 
                                this.props.updateProperty({prop:'product_name', value: event.target.value })}
                                }/>
                                <h5>cellular Tech</h5>
                                <select className="form-control"
                                id="cellular_tech" 
                                value={this.props.cellular_tech}
                                onChange={(event) => { 
                                this.props.updateProperty({prop:'cellular_tech', value: event.target.value })}
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
                                value={this.props.cellular_bands}
                                onChange={(event) => { 
                                this.props.updateProperty({prop:'cellular_bands', value: event.target.value })}
                                }>
                                    <option>ATT/Tmobile (PTCRB)</option>
                                    <option>Verizon</option>
                                    <option>Vodafone</option>
                                    <option>Other / Undecided</option>
                                </select>
                                
                                <br/><br/>
                                <input type="checkbox" 
                                    id="cellular_bands"
                                    blah={this.props.size_viable ? "checked" : ""}
                                    onClick={(event) => { 
                                    this.props.updateProperty({prop:'size_viable', value: event.target.value })}}
                                    value={this.props.size_viable ? false : true}
                                />

                                <strong> Size Viable for Chosen Bands</strong>
                                <h1>Opportunity</h1>
                                <h2>Start MNDA Process (Sales)</h2>
                                <br/><br/>
                                <h5>Organization Name</h5>
                                <input type="text" className="form-control" 
                                    id="org_name" 
                                    value={this.props.org_name}
                                    onChange={(event) => { 
                                    this.props.updateProperty({prop:'org_name', value: event.target.value })}
                                }/>
                                <h5>Lead Person Name</h5>
                                <input type="text" className="form-control" 
                                    id="lead_person"
                                    value={this.props.lead_person}
                                    onChange={(event) => { 
                                    this.props.updateProperty({prop:'lead_person', value: event.target.value })}
                                } 
                                />
                                <h5>Lead Person Email</h5>
                                <input type="email" className="form-control" 
                                    id="lead_email" 
                                    value={this.props.lead_email}
                                    onChange={(event) => { 
                                    this.props.updateProperty({prop:'lead_email', value: event.target.value })}
                                }/>
                                <br/><br/>
                                <input type="checkbox" 
                                    id="org_person_email"
                                    test={this.props.org_person_email ? "checked" : ""}
                                    onClick={(event) => { 
                                    this.props.updateProperty({prop:'org_person_email', value: event.target.value })}}
                                    value={this.props.org_person_email ? false : true}
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
                                
                                <input type="checkbox" 
                                    id="cmnda_started"
                                    blah={this.props.mnda_started ? "checked" : ""}
                                    onClick={(event) => { 
                                    this.props.updateProperty({prop:'mnda_started', value: event.target.value })}}
                                    value={this.props.mnda_started ? false : true}
                                />
                                <strong>  MNDA Process Has Been Started</strong>

                                
                                
                                <h2>Archive MNDA (Legal Admin)</h2>
                                <input type="checkbox" 
                                    id="mnda_archived"
                                    blah={this.props.mnda_archived ? "checked" : ""}
                                    onClick={(event) => { 
                                    this.props.updateProperty({prop:'mnda_archived', value: event.target.value })}}
                                    value={this.props.mnda_archived ? false : true}
                                />
                                <strong>  MNDA Has Been Archived</strong>
                            </div>
                            <input 
                                value={this.props.pipedrive_id}
                                onClick={()=> updateProperty({prop:'pipedrive_id', value: this.test})} 
                                onClick={()=> this.props.checkListPost(this.props.obj)} 
                                className="btn btn-default" type="submit" defaultValue="Submit"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
//{()=> this.props.updatePipeDriveId(pipeDriveApiOne.id)}
const mapStateToProps = state => {
    let {one, pipe} = state.checkList
    let obj = state.data
    //console.log('state = ', state.data)
    let { 
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
    updatePipeDriveId,
    updateProperty,
    checkListId,
    pipeDriveGetRequest,
    pipeDriveGetOne,
    checkListGetOne,
    checkListPost,
})(CheckList);
