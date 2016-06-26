var Comment = React.createClass({
    render: function () {
        return (
            <div>
                <h2>{ this.props.author }</h2>
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
    containerConstructorString: function () {
        return "ReactDOM.render(<PlayField />, document.getElementById('container'))";
    },
    render: function () {
        return (
            <html>
            <Head title={this.props.title}/>
            <body>
            <div>
                <h1>Render on Server side</h1>
                <PlayField/>
                <CommentList comments={this.props.comments}/>
            </div>
            <hr/>
            <hr/>
            <div>
                <h1>Render on Client side</h1>
                <div id="container">
                    "Not React Rendering"
                </div>
                <script type="text/babel">
                    {this.containerConstructorString()}
                </script>
            </div>
            </body>
            </html>
        );
    }
});