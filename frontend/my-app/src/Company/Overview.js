import React, { Component } from 'react';
import './CompanyInfo.css';





export default class CompanyInfo extends Component {

    componentDidMount() {

        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
          }, 700);
    }

    render() {
        const companyInfo = this.props.companyInfo;


             

        





        return (
            <React.Fragment>
                <div className="container" style={{width: '50vw', height: '50vh'}}>
                    <h3>Overview</h3>
                    <br/>
                    <table className="table table-borderless">
                    <tbody>
                        <tr className="overview-row">
                        <th>Website</th>
                        <td>{companyInfo.website}</td>
                        <th>Type</th>
                        <td>{companyInfo.type}</td>
                        </tr>
                        <tr className="overview-row">
                        <th>Size</th>
                        <td>{companyInfo.size}</td>
                        <th>Headquarters</th>
                        <td>{companyInfo.headquarters}</td>
                        </tr>
                        <tr className="overview-row">
                        <th>Founded</th>
                        <td>{companyInfo.founded}</td>
                        <th>Industry</th>
                        <td>{companyInfo.industry}</td>
                        </tr>
                    </tbody>
                    </table>
                    <br/>
                    <hr/>
                    <h5>About</h5>
                    <p>{this.props.companyInfo.about}</p>
                    <hr/>

                    
                    <br/>



                </div>
            </React.Fragment>
        );
    }
}
