import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="fixed-top">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <Link to="/">
                            <h5 className="text-muted h4">
                                Bring Me Home
                            </h5>
                        </Link>
                        <Link to="/tips">
                            <h5 className="text-muted h4">
                                Markdown syntax and tips
                            </h5>
                        </Link>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="text-muted" to="/">
                        <img src="/markdown.svg" width="40" height="40" className="d-inline-block logo" alt="" loading="lazy"/>
                            Mark This Down
                    </Link>
                </nav>
            </div>
        );
    };
};

export default Navbar;
