import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardColumns,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';

const settings = require("./settings.json")

class Browser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "categories": [],
            "plants": [],
        };

    }

    componentDidMount() {
        fetch(settings.backendServer + "/v1/categories/").then((resp) => {
            return resp.json();

        }).then((data) => {
            this.setState({"categories": data});

        });

        fetch(settings.backendServer + "/v1/plants/").then((resp) => {
            return resp.json();

        }).then((data) => {
            console.log(data);
            this.setState({"plants": data});

        });

    }

    render() {
        return (
            <CardColumns>
                {
                    this.state.plants.map((plant) => {
                        return (
                            <Card key={plant.name}>
                                {
                                    plant.image ? (
                                        <CardImg src={plant.image} />
                                    ) : ""
                                }
                                <CardBody>
                                    <CardTitle><h3>{plant.name}</h3></CardTitle>
                                    <CardText>{plant.description}</CardText>
                                </CardBody>
                            </Card>
                        );

                    })

                }
            </CardColumns>

        );

    }

}

export default Browser;
