let $ = q => document.querySelector(q);

function render_preview() {
    // .preview is the button to switch to the preview tab
    // .js-code-editor is the parent of both the preview content and the code editor.
    // #readme is the preview content

    $(".preview").addEventListener("click", () => {
        let didLoadPreview = () => {
            // if preview is not selected, do not load
            if (!$(".preview").classList.contains("selected")) {
                return;
            }
            // if preview is not loaded, wait 200ms and try again
            if (!$(".js-code-editor").classList.contains("show-preview")) {
                setTimeout(didLoadPreview, 200);
            } else {
                // format #readme element when preview is loaded
                window.MathJax.Hub.Queue(
                    ["Typeset", window.MathJax.Hub],
                    $("#readme")
                );
            }
        };
        setTimeout(didLoadPreview, 200);
    });
}

// reformat when page loads dynamically
document.addEventListener("pjax:end", () => {
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
    render_preview();
});

render_preview();
