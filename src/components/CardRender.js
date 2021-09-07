import React from 'react'
import { Card, Button } from 'react-bootstrap'


class CardRender extends React.Component {
    render() {
        return (
            <div>



                {this.props.alldata.map((element) => {

                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={element.imageUrl} />
                            <Card.Body>
                                {/* <Card.Title>Card Title</Card.Title> */}
                                <Card.Text>
                                    {element.title}
                                </Card.Text>
                                <Button variant="primary" onClick={() => { this.props.adduserdata(element) }}  >add to fav</Button>
                            </Card.Body>
                        </Card>




                    )




                })}


            </div>
        )
    }
}

export default CardRender
