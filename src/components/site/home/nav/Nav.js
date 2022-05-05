import React, { Component } from 'react';
import Header_nav from './Header_nav';
import Middle_nav from './Middle_nav';

class Nav extends Component {
    render() {
        return (
            <div>
                <Header_nav />
                <Middle_nav />
            </div>
        );
    }
}

export default Nav;