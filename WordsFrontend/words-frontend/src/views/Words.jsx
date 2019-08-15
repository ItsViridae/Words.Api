import React, { Component } from 'react'
import apiService from '../apiService/apiService'
import API_ENDPOINTS from '../endpoints/endpoints'
import { Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import AddButton from '../components/AddButton'
import Grid from '@material-ui/core/Grid'

export default class Words extends Component {
    constructor(props) {
        super(props)

        this.state = {
            words: []
        }
    }

    componentDidMount() {
        this.getAllWords();
    }

    getAllWords = () => {
        apiService.get(API_ENDPOINTS.getAllWords)
            .then((response) => {
                if (response.data) {
                    this.setState({
                        words: response.data
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    showList = () => {
        var list = []
        list.push(
            this.state.words.map((item, index) => {
                return (
                    <TableRow key={index}>
                        <TableCell>
                            {item.id}
                        </TableCell>
                        <TableCell>
                            {item.name}
                        </TableCell>
                    </TableRow>
                )
            })
        )
        return list
    }
    render() {
        return (
            <Grid
                container
                justify="center"
            >
                <Grid item xs={8}>
                    <br />
                    <AddButton />
                    <br />
                    <Card>
                        <CardContent>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell>Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.showList()}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}