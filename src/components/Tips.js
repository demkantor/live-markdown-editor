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
                    <h2>--- Lists ---</h2>
                    <p className="text-muted">
                        Ordered lists start with a number then period then space for each new list item
                        <br/>
                        Unordered lists start with a * or a - or a +, all of these will look the same.
                    </p>
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Unordered Lists</th>
                                <th scope="col">Ordered Lists</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>*   Red</td>
                                <td>1. Red</td>
                            </tr>
                            <tr>
                                <td>* Blue</td>
                                <td>2. Blue</td>
                            </tr>
                            <tr>
                                <td>*   Yellow</td>
                                <td>3.  Yellow</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2>--- Links ---</h2>
                    <p className="text-muted">Inline links start with display text in [] square brackets</p>
                    <p className="text-muted">followed but the link in () rounded brackets  </p>
                    <p className="text-muted">optionally a title tag can be added</p>
                    <code className="text-muted">This is [an example](http://example.com/ "Title") inline link.</code>
                </div>
            </div>
        )
    }
}

export default Tips
