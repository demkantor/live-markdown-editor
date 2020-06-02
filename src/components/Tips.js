import React, { Component } from 'react'




export class Tips extends Component {
    render() {
        return (
            <div className="tips">
                <h1>Markdown Syntax</h1>
                <h2>--- Headers ---</h2>
                <div className="container-sm">
                    <p className="text-muted">
                        Markdown supports two styles of headers, Setext and atx.
                        <br/>
                        Setext-style headers are “underlined” using equal signs (for first-level headers) and dashes (for second-level headers)
                        <br/>
                        Any number of underlining =’s or -’s will work.
                        <br/>
                        Atx-style headers use 1-6 hash characters at the start of the line, corresponding to header levels 1-6
                    </p>
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Setext Style</th>
                                <th scope="col">atx style</th>
                                <th scope="col">HTML style</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    This is an H1
                                    <br/>
                                    ===========
                                </td>
                                <td># This is an H1</td>
                                <td>{`<h1> </h1>`}</td>
                            </tr>
                            <tr>
                                <td>
                                    This is an H2
                                    <br/>
                                    ---------------------
                                </td>
                                <td>## This is an H2</td>
                                <td>{`<h2> </h2>`}</td>
                            </tr>
                            <tr>
                                <td>n/a</td>
                                <td>###### This is an H6</td>
                                <td>{`<h6> </h6>`}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Tips
