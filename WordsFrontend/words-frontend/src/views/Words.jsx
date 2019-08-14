import React, { Component } from 'react'
import apiInstance from '../apiService/api'

export default class Words extends Component{

    componentDidMount(){
        let response = apiInstance.get()
    }
    
    render(){
        return(

        )
    }
}