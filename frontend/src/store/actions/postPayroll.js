import React from "react";

export const postPayrollAction = () => async (dispatch, getState) => {
    const token = localStorage.getItem('access')
    const url = 'https://razzpay.propulsion-learn.ch/api/record/runpayroll/';
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
    });
    const body = {
        'date_paid': '2020-02-14',
        'payperiod_start': '2020-02-01',
        'payperiod_end': '2020-02-29'
    };
    const config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    };
    const response = await fetch(url, config);
    const data = await response;
    return data;
};