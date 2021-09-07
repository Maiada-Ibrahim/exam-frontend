import React from 'react';
import CardUserRender from './CardUserRender.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
const axios = require('axios')


class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      userdata: [],
      showform:false,
      selectobj:{}
    };
  }
  componentDidMount = async () => {
    const { user } = this.props.auth0;
    await this.setState({ email: `${user.email}` })
    console.log('hhhhhhhhhhhhhhhhh', this.state.email)
    let data = await axios.get(`http://localhost:3001/getuserdata?email=${this.state.email}`)

    console.log(data.data)
    await this.setState({ userdata: data.data })

  }


  delete=async (id)=>{
console.log('jjjjjjjjjjjjjj')
    let data = await axios.delete(`http://localhost:3001/deletedata/${id}?email=${this.state.email}`)
    console.log(data.data)
    await this.setState({ userdata: data.data })


  }

  update=async   (inf)=>{
console.log('hhhhhhhhhhhhhhhhhh')
await this.setState({ showform: true })
let chocinf={
    title:inf.title,
    imageUrl:inf.imageUrl,
    email:inf.email,
    _id:inf._id
}

await this.setState({ selectobj: chocinf })


let id=this.state.selectobj._id
let data = await axios.put(`http://localhost:3001/updatedata/${id}`,chocinf)
    console.log(data.data)
    // await this.setState({ userdata: data.data })


  






}


updatefromform=(e)=>{
  let chocinf={
    title:e.target.title.value,
    imageUrl:e.target.imageUrl.value,
    email:this.state.selectobj.email,
    _id:this.state.selectobj._id
}

this.update(chocinf)


}







  render() {
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        <CardUserRender
let userdata= {this.state.userdata}
let delete={this.delete}
let update={this.update}
        />
{this.state.showform && 
<form  onSubmit={this.updatefromform}         >
<label>title</label><input type="text"    defaultValue={this.state.selectobj.title}   name="title"          />
<label>img</label><input type="text"    defaultValue={this.state.selectobj.imageUrl}   name="imageUrl"          />

<input type="submit"        value="update "     />
</form>


}


      </>
    )
  }
}

export default withAuth0(MyFavorites);

