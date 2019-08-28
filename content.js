let head = document.querySelector("head");
// inject scripts into head
["mathjax_config.js", "MathJax/MathJax.js", "dynamic_math.js"].forEach(item => {
    let script = document.createElement("script");
    script.src = chrome.extension.getURL(item);
    head.appendChild(script);
});
