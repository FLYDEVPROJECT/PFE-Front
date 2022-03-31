// var xss = require("xss");
// var list = [];
const whiteList ={
    whiteList: {
        p:['style', 'class'],
        ol:['style', 'class'],
        ul:['style', 'class'],
        li:['style', 'class'],
        div: ['style', 'class'],
        a: ["href", "title", "target"],
        h1:['style', 'class'],
        h2:['style', 'class'],
        h3:['style', 'class'],
        h4:['style', 'class'],
        h5:['style', 'class'],
        h6:['style', 'class'],
        dd:['style', 'class'],
        span:['style', 'class'],
        i:['style', 'class'],
        b:['style', 'class'],
        strong:['style', 'class'],
        u:['style', 'class'],
        br:['style', 'class'],
        dl:['style', 'class'],
        dt:['style', 'class'],
        em:['style', 'class'],
        fieldset:['style', 'class'],
        font:['style', 'class'],
        hr:['style', 'class'],
        img:['style', 'class'],
        legend:['style', 'class'],
        link:['style', 'class'],
        map:['style', 'class'],
        pre:['style', 'class'],
        small:['style', 'class'],
        sup:['style', 'class'],
        sub:['style', 'class'],
        table:['style', 'class'],
        tbody:['style', 'class'],
        td:['style', 'class'],
        th:['style', 'class'],
        thead:['style', 'class'],
        // tr:['style', 'class'],
        tr:['style', 'class'],
        
        // img: ["src","width","height"],    //uncomment when need images
    },
    onTagAttr: function (tag, name, value, isWhiteAttr) {
        if (tag === "img" && name === "src") {
            // list.push(xss.friendlyAttrValue(value));
            return(`src=${value}`);
        }
    }
}

export default whiteList;
