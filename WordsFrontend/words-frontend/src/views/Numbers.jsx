import React, { Component } from 'react'
import apiService from '../apiService/apiService'
import API_ENDPOINTS from '../endpoints/endpoints'
import { Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'

export default class Numbers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            numbers:[]
        }
    }

    componentDidMount() {
            this.getAllNumbers()
    }
    
    getAllNumbers = () => {
        
        apiService.get(API_ENDPOINTS.getAllNumbers)
        .then((response) => {
            if(response.data) {
                console.log(response.data)
                this.setState({
                    numbers: response.data
                })
            }
        })
    }

    showNumbersList = () => {
        var list = []
        list.push(
            this.state.numbers.map((item, index) => {
                return (
                    <TableRow key={index}>
                        <TableCell>
                            {item.id}
                        </TableCell>
                        <TableCell>
                            {item.displayName}
                        </TableCell>
                    </TableRow>
                )
            })
        )
        return list
    }

    render(){
        return(
            <Grid
                container
                justify="center"
            >
                <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell>Number</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.showNumbersList()}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}