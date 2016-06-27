var Head = React.createClass({
    displayName: "Head",
    render: function () {
        return (
            <head>
                <meta charSet="utf-8"/>
                <title>{this.props.title}</title>
                <link rel="stylesheet" type="text/css" href="/webjars/bootstrap/3.3.6/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" type="text/css" href="/css/my.css"/>
                <script src="/webjars/jquery/2.0.0/jquery.min.js"></script>
                <script src="/webjars/stomp-websocket/2.3.4/lib/stomp.min.js"></script>
                <script src="/webjars/bootstrap/3.3.6/dist/js/bootstrap.min.js"></script>
                <script src="/webjars/react/15.1.0/react.min.js"></script>
                <script src="/webjars/react/15.1.0/react-dom.min.js"></script>
                <script src="/webjars/requirejs-babel/0.0.8/babel-5.8.22.min.js"></script>
                <script src="/js/doms.js"></script>
                <script src="/js/playfield.js"></script>
            </head>
        )
    }
});