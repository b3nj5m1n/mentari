ENVIRONMENT = null;
ENVIRONMENTS = []

window.onload = function() {
    ENVIRONMENTS = [
        new A(),
    ]
    ENVIRONMENT = ENVIRONMENTS[0];
    skip_question();
    render_answer(document.getElementById('answer-input'));
};

function render_question() {
    latex = ENVIRONMENT.get();
    katex.render(latex, document.getElementsByClassName('question-latex-container')[0], {
        throwOnError: false
    });
}

function render_answer(caller) { 
    latex = caller.value;
    katex.render(latex, document.getElementsByClassName('answer-latex-container')[0], {
        throwOnError: false
    });
}

function check_answer(caller) { 
    stripe = document.getElementsByClassName("stripe-container")[0];
    if (ENVIRONMENT.check(caller.value)) {
        stripe.style.backgroundColor = "var(--green)";
        caller.value = "";
        skip_question();
    } else {
        stripe.style.backgroundColor = "var(--red)";
    }
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
    ENVIRONMENT.next();
    render_question();
}
