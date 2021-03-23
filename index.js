ENVIRONMENT = null;
ENVIRONMENTS = []

window.onload = function() {
    ENVIRONMENTS = [
        new C0_M01(),
        new C0_M02(),
        new C0_M03(),
        new C0_M04(),
        new C0_M05(),
        new C0_M06(),
    ]
    ENVIRONMENT = ENVIRONMENTS[0];
    document.getElementById('answer-input').value = "";
    skip_question();
    search_envs();
    select_result(0);
    update_title();

    hotkeys('up', 'search', function(event, handler){
        event.preventDefault();
        change_selection(true);
    });
    hotkeys('down', 'search', function(event, handler){
        event.preventDefault();
        change_selection(false);
    });
    hotkeys('enter', 'search', function(event, handler){
        select_environment_from_search();
        document.getElementById("answer-input").focus();
    });
    hotkeys('ctrl+c,escape', 'search', function(event, handler){
        toggle_search(true);
    });
    hotkeys('ctrl+k', 'all', function(event, handler){
        event.preventDefault();
        toggle_search();
    });
    hotkeys('ctrl+j', 'all', function(event, handler){
        event.preventDefault();
        skip_question();
    });

    clear_answer();
};

hotkeys.filter = function(event){
  return true;
}

function update_title() {
    document.getElementsByClassName("title")[0].innerHTML = ENVIRONMENT.name;
}

function clear_search() {
    document.getElementById("search-input").value = "";
    search_envs();
    select_result(0);
}

function change_selection(negative) {
    elements = Array.from(document.querySelectorAll('.search-result'));
    current_index = SELECTED_INDEX;
    count = 0;
    while (true) {
        count += 1;
        if (negative) {
            current_index -= 1;
        } else {
            current_index += 1;
        }
        current_index = ((current_index%elements.length)+elements.length)%elements.length;
        if (!elements[current_index].classList.contains("invisible")) {
            select_result(current_index);
            break;
        }
        if (count > elements.length) { break; }
    }
}

function render_question() {
    latex = ENVIRONMENT.get();
    katex.render(latex, document.getElementsByClassName('question-latex-container')[0], {
        throwOnError: false
    });
}

function render_answer() { 
    caller = document.getElementById('answer-input');
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

function toggle_search(disable) {
    box_container = document.getElementsByClassName("search-box-container")[0];
    search_input = document.getElementById("search-input");
    if (box_container.style.display == "block" || disable) {
        box_container.style.display = "none";
        hotkeys.setScope('all');
        clear_search();
    }
    else if (!disable) {
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
    change_selection(true);
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
    container.classList.add('search-result');
    var attrib_container = document.createElement("ul");
    attrib_container.classList.add('horizontal-list');
    var result = document.createElement("li");
    var note = document.createElement("li");
    result.appendChild(document.createTextNode(item.name));
    note.appendChild(document.createTextNode(item.note));
    attrib_container.appendChild(result);
    attrib_container.appendChild(note);
    container.appendChild(attrib_container);
    var indx = document.createElement("div");
    indx.classList.add('search-result-index');
    indx.innerHTML = "<input value='" + index.toString() + "'/>";
    container.appendChild(indx);
    var regex = new RegExp(search_term, "i");
    if (item.name.search(regex) < 0) {
        container.classList.add("invisible");
    }
    search_results_container.appendChild(container);
}

function select_environment_from_search() {
    var selected = document.getElementsByClassName("selected")[0];
    var index = selected.getElementsByClassName('search-result-index')[0].children[0].value;
    ENVIRONMENT = ENVIRONMENTS[index];
    update_title();
    skip_question();
}

function clear_answer() {
    document.getElementById('answer-input').value = "";
    render_answer();
    document.getElementById('answer-input').focus();
}

function skip_question() {
    ENVIRONMENT.next();
    render_question();
    clear_answer();
    document.getElementById('answer-input').readOnly = false;
}

function solve_question() {
    document.getElementById('answer-input').value = ENVIRONMENT.solve();
    render_answer();
    document.getElementById('answer-input').readOnly = true;
    document.getElementById('answer-input').focus();
}
