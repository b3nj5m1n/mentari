ENVIRONMENT = null;
ENVIRONMENTS = []

window.onload = function() {
    ENVIRONMENTS = [
        new A(),
        new B(),
    ]
    ENVIRONMENT = ENVIRONMENTS[0];
    skip_question();
    render_answer(document.getElementById('answer-input'));
    search_envs();
    select_result(0);
    update_title();

    hotkeys('up', 'search', function(event, handler){
        select_result(((SELECTED_INDEX-1)+ENVIRONMENTS.length)%ENVIRONMENTS.length);
    });
    hotkeys('down', 'search', function(event, handler){
        select_result((SELECTED_INDEX+1)%ENVIRONMENTS.length)
    });
    hotkeys('enter', 'search', function(event, handler){
        select_environment_from_search();
        document.getElementById("answer-input").focus();
    });
};

hotkeys.filter = function(event){
  return true;
}

function update_title() {
    document.getElementsByClassName("title")[0].innerHTML = ENVIRONMENT.name;
}

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
    if (box_container.style.display == "block") {
        box_container.style.display = "none";
        hotkeys.setScope('all');
    }
    else {
        box_container.style.display = "block";
        hotkeys.setScope('search');
        search_input.focus();
    }
}

SELECTED_INDEX = 0;
var search_term = ".*";

function search_envs() {
    search_term = document.getElementById("search-input").value;
    document.getElementsByClassName("search-results")[0].innerHTML = "";
    ENVIRONMENTS.forEach(add_environment_to_search_box);
    select_result(SELECTED_INDEX);
}

function select_result(index) {
    Array.from(document.querySelectorAll('.selected')).forEach((el) => el.classList.remove('selected'));
    SELECTED_INDEX = index;
    var results = document.getElementsByClassName("search-results")[0].children;
    results[SELECTED_INDEX].classList.add("selected");
}

function add_environment_to_search_box(item, index) {
    var search_results_container = document.getElementsByClassName("search-results")[0];
    var container = document.createElement("li");
    var result = document.createTextNode(item.name);
    container.classList.add('search-result');
    container.appendChild(result);
    var indx = document.createElement("div");
    indx.classList.add('search-result-index');
    indx.innerHTML = "<input value='" + index.toString() + "'/>";
    container.appendChild(indx);
    if (item.name.search(search_term) < 0) {
        container.classList.add("invisible");
    }
    search_results_container.appendChild(container);
}

function select_environment_from_search() {
    var selected = document.getElementsByClassName("selected")[0];
    var index = selected.getElementsByClassName('search-result-index')[0].children[0].value;
    ENVIRONMENT = ENVIRONMENTS[index];
    update_title();
}

function skip_question() {
    ENVIRONMENT.next();
    render_question();
}
