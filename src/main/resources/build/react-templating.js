// These are required by reactJs and should be provided by environment
global = {};
console = {};
console.debug = print;
console.warn = print;
console.log = print;
console.error = print;
//https://wiki.openjdk.java.net/display/Nashorn/Nashorn+extensions - map support
function render(template, model) {
    var data = {};
    for (var k in model) {
        if (model[k] instanceof Java.type("java.lang.Iterable")) {
            data[k] = Java.from(model[k]);
        } else {
            data[k] = model[k];
        }
    }
    var element = React.createElement(eval(template), data);
    // renderToStaticMarkup removes any react markup attributes (e.g data-reactid=".ho906m2sqd.1.0.0.3" from rendered markup
    return ReactDOMServer.renderToStaticMarkup(element);
}

function renderJsx(template, model) {
    var jsTemplate = Babel.transform(template, {presets: ['react']}).code;
    // console.log(jsTemplate);
    return render(jsTemplate, model);
}

function loadJsxFile(filePath) {
    try {
        var BufferedReader = Java.type("java.io.BufferedReader");
        var FileReader = Java.type("java.io.FileReader");
        var File = Java.type("java.io.File");
        var file = new File(filePath);
        var reader = new BufferedReader(new FileReader(file));
        var buf = '', line = null;
        while ((line = reader.readLine()) != null) {
            buf += line;
        }
    } catch (e) {
        console.log(file.getAbsolutePath());
        console.log(e);
    } finally {
        try {
            reader.close();
        } catch (ignored) {
        }
    }
    eval(Babel.transform(buf, {presets: ['react']}).code);
}

(function () {
    /* todo: fix file path */
    /* todo: not effected */
    var loadingJsx = [
        'src/main/resources/static/js/playfield.jsx',
        'src/main/resources/static/js/doms.js'
    ];
    loadingJsx.forEach(function (file) {
        loadJsxFile(file);
    });
})();
