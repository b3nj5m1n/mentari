window.onload = function() {
    test_formula = "11 * 38";
    katex.render(test_formula, document.getElementsByClassName('question-latex-container')[0], {
        throwOnError: false
    });
    render_answer(document.getElementById('answer-input'));
};

function render_answer(caller) { 
    latex = caller.value;
    katex.render(latex, document.getElementsByClassName('answer-latex-container')[0], {
        throwOnError: false
    });
}

function toggle_search() {
    box_container = document.getElementsByClassName("search-box-container")[0];
    search_input = document.getElementById("search-input");
    if (box_container.style.display == "none") {
        box_container.style.display = "block";
        search_input.focus();
    }
    else {
        box_container.style.display = "none";
    }
}

function search_envs() {
}

function skip_question() {
    alert("Skipping question.");
}
