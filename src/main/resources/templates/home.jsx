var Comment = React.createClass({
    render: function () {
        return (
            <div>
                <h4>{ this.props.author }</h4>
                <p>{ this.props.content } </p>
            </div>
        )
    }
});

var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.comments.map(function (comment) {
            return <Comment author={ comment.author } content={ comment.content } key={ comment.id }/>
        });

        return (
            <div className="comment-list">
                { commentNodes }
            </div>
        )
    }
});

React.createClass({
    containerConstructorString: "ReactDOM.render(<PlayField />, document.getElementById('container'));",
    render: function () {
        var style = {padding: '1em'};
        return (
            <html>
            <Head title={this.props.title}/>
            <body>
            <h1>Render on Server side</h1>
            <div style={style}>
                <PlayField/>
                <CommentList comments={this.props.comments}/>
            </div>
            <hr/>
            <hr/>
            <h1>Render on Client side</h1>
            <div style={style}>
                <div id="container">
                    "Not React Rendering"
                </div>
                <script type="text/babel" dangerouslySetInnerHTML={{__html:this.containerConstructorString}}></script>
            </div>
            </body>
            </html>
        );
    }
});