let $ = q => document.querySelector(q);

function render_preview() {
    $(".preview").addEventListener("click", () => {
        let didLoadPreview = () => {
            if (!$(".preview").classList.contains("selected")) {
                return;
            }
            if (!$(".js-code-editor").classList.contains("show-preview")) {
                setTimeout(didLoadPreview, 200);
            }
            window.MathJax.Hub.Queue(
                ["Typeset", window.MathJax.Hub],
                $("#readme")
            );
        };
        setTimeout(didLoadPreview, 200);
    });
}
document.addEventListener("pjax:end", () => {
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
    render_preview();
});
render_preview();
