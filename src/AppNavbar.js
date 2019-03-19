import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,

} from 'reactstrap';

class AppNavBar extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">PlantDB</NavbarBrand>
            </Navbar>

        );

    }

}

export default AppNavBar;
