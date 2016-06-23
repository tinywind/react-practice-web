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
    render: function () {
        return (
            <html>
            <Head title={this.props.title}/>
            <body>
            <h1>{this.props.title}</h1>
            <div>
                <CommentList comments={this.props.comments}/>
            </div>
            </body>
            </html>
        )
    }
});