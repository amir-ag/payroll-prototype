import React, {useEffect} from "react";
import './CompanyReports.scss';
import CompanyTableRow from "./CompanyTableRow/CompanyTableRow";
import {getPayDatesAction} from "../../../../store/actions/getPayDatesAction";
import ReactLoading from 'react-loading';
import {connect} from "react-redux";
import {ReactComponent as FolderOpen} from './../../../../assets/svg/folder-open.svg';

const CompanyReports = (props) => {

    useEffect(() => {
        props.dispatch(getPayDatesAction())
    }, []);

    return (
        <div className="company-reports pages-container">
            <div className="company-reports-title">
                <div className="company-reports-title-box">
                    <div className="company-reports-title-box-content">
                        <FolderOpen width="50px" height="50px"/>
                        <h1>Reports</h1>
                    </div>
                    <div className="company-reports-title-placeholder"/>
                </div>
            </div>
            <div className="company-reports-table-container">
                <div className="company-reports-table-title">
                    <h2>Summaries</h2>
                </div>
                <div className="company-reports-table-header">
                    <div className="company-reports-table-header-property-placeholder">
                        <div/>
                    </div>
                    <div className={"company-reports-table-header-property-container"}>
                        <div className="company-reports-table-header-property-container-element"><h3>Pay Date</h3></div>
                        <div className="company-reports-table-header-property-container-element"><h3>Type</h3></div>
                        <div className="company-reports-table-header-property-container-element"><h3>Description</h3>
                        </div>
                        <div className="company-reports-table-header-property-container-element"><h3>Debit</h3></div>
                        <div className='company-reports-helper-box'/>
                    </div>
                </div>
                <div className="company-reports-table-content">
                    {
                        !props.payDates.length > 0 ? (
                            <ReactLoading type={"spin"} color={"var(--mainBurgund"}/>
                        ) : (<div className="company-reports-table-content-add">
                                {props.payDates.map((payDate, i) => {
                                    return <CompanyTableRow payDate={payDate} key={i}/>
                                })}</div>
                        )
                    }
                </div>
            </div>
        </div>
    )
};

const mapStatetoProps = state => {
    return {
        payDates: state.dateReducer.payDates
    }
};

export default connect(mapStatetoProps)(CompanyReports)