var Head = React.createClass({
    displayName: "Head",
    render: function () {
        return (
            React.createElement("head", null,
                React.createElement("meta", {charSet: 'utf-8'}),
                React.createElement("title", null, this.props.title)
            )
        );
    }
});