import React, { Component, createRef } from 'react';
import db from '../firebase';
import ReactMarkdown from 'react-markdown';



class Post extends Component {

    constructor(props) {
        super(props);
    
        this.titleRef = createRef();
        this.bodyRef = createRef();
        // firebase refrence
        this.postFBRef = db.ref(`posts/${this.props.match.params.postId}`);
        this.state = {
          mdBody: ''
        };
    };

    componentDidMount(){
        this.postFBRef.on('value', (snapshot) => {
            if(!snapshot.val()) return;
            this.titleRef.current &&
                (this.titleRef.current.value = snapshot.val().title);
            this.bodyRef.current &&
                (this.bodyRef.current.value = snapshot.val().body);
            this.setState({
                mdBody: snapshot.val().body
            });
        });
    };

    delete = () => {
        this.postFBRef.remove()
        .then(()=> this.props.history.push(`/`))
        .catch(error => console.log(error));
    };

    onChange = () => {
        this.postFBRef.set({
            title: this.titleRef.current.value,
            body: this.bodyRef.current.value
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    };

    render() {
        return (
            <div className="post">
                <div className="row">
                    <div className="col col-sm-12">
                        <i 
                            className="fas fa-times-circle float-right"
                            onClick={this.delete}>
                                delete
                        </i>
                        <input
                            className="post-title-input"
                            ref={this.titleRef}
                            type="text"
                            placeholder="Title"
                            onChange={this.onChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-6">
                        <textarea
                            className="form-control"
                            placeholder="write your post here...."
                            ref={this.bodyRef}
                            type="text"
                            onChange={this.onChange}
                            row={80}/>
                    </div>
                    <div className="col col-sm-6">
                        <ReactMarkdown
                            source={this.state.mdBody}
                            className="markdown-preview"/>
                    </div>
                </div>
            </div>
        );
    };
};


export default Post;
