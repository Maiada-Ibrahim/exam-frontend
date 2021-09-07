import React, { Component } from 'react';
import CardRender from './CardRender';
import { withAuth0 } from '@auth0/auth0-react';
const axios = require('axios')


class AllDataAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            alldata: []


        };
    }

    componentDidMount = async () => {
        const { user } = this.props.auth0;
        await this.setState({ email: `${user.email}` })
        console.log('hhhhhhhhhhhhhhhhh',this.state.email)
        let data = await axios.get(`http://localhost:3001/getalldata?email=${this.state.email}`)

        console.log(data.data)
        await this.setState({ alldata: data.data })

    }


    adduserdata= async   (inf)=>{
console.log('ugjuhgujhg')
let chocinf={
    title:inf.title,
    imageUrl:inf.imageUrl,
    email:inf.email
}
console.log(chocinf)

let data = await axios.post(`http://localhost:3001/adduserdata`,chocinf)


 }


















    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>

                <CardRender
                    alldata={this.state.alldata}
                    adduserdata={this.adduserdata}

                />


            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
