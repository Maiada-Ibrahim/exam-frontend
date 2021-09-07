import React from 'react'
import {Card,Button} from 'react-bootstrap'


 class CardUserRender extends React.Component {
    render() {
        return (
            <div>



                {this.props.userdata.map((element) => {

                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={element.imageUrl} />
                            <Card.Body>
                                {/* <Card.Title>Card Title</Card.Title> */}
                                <Card.Text>
                                    {element.title}
                                </Card.Text>
                                <Button variant="primary" onClick={() => { this.props.delete(element._id) }}  >add to fav</Button>
                                <Button variant="primary" onClick={() => { this.props.update(element) }}  >add to fav</Button>
                            </Card.Body>
                        </Card>




                    )




                })}


            </div>
        )
    }
}

export default CardUserRender
