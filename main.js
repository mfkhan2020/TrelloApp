let data_div = document.getElementById("data-div");


function add_card(){
    let dyn_div = document.createElement("div");
    dyn_div.className = "dyn-div"

    let input_tab_div = document.createElement("div");
    input_tab_div.className = "input-tab-div"
    
    let dyn_input = document.createElement("input");
    dyn_input.type = "text";
    dyn_input.placeholder = "Enter Task"
    dyn_input.className = "dyn-input"

    // let input_add_btn = document.createElement("button");
    // input_add_btn.innerHTML = "Add Note"
    // input_add_btn.className = "input-add-btn"

    let add_img = document.createElement("img");
    add_img.src = "images/addimg.png"
    add_img.className = "add-img"

    data_div.appendChild(dyn_div);
    dyn_div.appendChild(input_tab_div);
    input_tab_div.appendChild(dyn_input);
    // input_tab_div.appendChild(input_add_btn);
    input_tab_div.appendChild(add_img);
    return;
}


