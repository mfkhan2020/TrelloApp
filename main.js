let data_div = document.getElementById("data-div");


function add_card_prompt(){
    let user_heading = prompt("Enter Your Heading");
    add_card(user_heading);
}



function add_card(user_heading){

    let dyn_div = document.createElement("div");
    dyn_div.className = "dyn-div"

    let tab_heading = document.createElement("h3");
    tab_heading.className = "tab-heading";
    tab_heading.innerHTML = user_heading;
    
    let dyn_add_card_a = document.createElement("a");
    dyn_add_card_a.innerHTML = " + Add a card";
    dyn_add_card_a.href = "#";
    dyn_add_card_a.className = "dyn-add-card-a"
    dyn_add_card_a.onclick = function(){ add_card_tab(dyn_div)};

    let edit_icon = document.createElement("img")
    edit_icon.src = "images/editicon.png";
    edit_icon.className = "edit-icon";
    edit_icon.onclick = function(){ 
        let new_tab_heading = prompt("Edit Content", tab_heading.innerHTML)
        tab_heading.innerHTML = new_tab_heading;
    };

    



    let btn_add = document.getElementById("btn-add");

    data_div.insertBefore(dyn_div, btn_add);
    dyn_div.appendChild(edit_icon);
    dyn_div.appendChild(tab_heading);
    dyn_div.appendChild(dyn_add_card_a);
}

function add_card_tab(dyn_div){
    let tab_div = document.createElement("div");
    tab_div.className = "tab-div"
    tab_div.setAttribute("draggable", "true")

    let tab_prompt = prompt();

    let tab_para = document.createElement("p");
    tab_para.innerHTML = tab_prompt;

    let edit_img = document.createElement("img")
    edit_img.src = "images/edit.png";
    edit_img.className = "edit-img";
    edit_img.onclick = edit_tab;

    let del_img = document.createElement("img");
    del_img.src = "images/delete.png";
    del_img.className = "del-img";
    del_img.onclick = delete_tab;

    // dragging code 
    tab_div.id = "tab_" + new Date().getTime();
    
        tab_div.addEventListener("dragstart", function(e){
            let selected = e.dataTransfer.setData("text", e.target.id);

            console.log(selected);
            

            dyn_div.addEventListener("dragover", function(e){
                e.preventDefault();
            })

            dyn_div.addEventListener("drop", function(e){
                e.preventDefault();
                const draggedTabId = e.dataTransfer.getData("text");
                const draggedTab = document.getElementById(draggedTabId);
                dyn_div.appendChild(draggedTab);
                selected = null;
            })
        })
    

    dyn_div.insertBefore(tab_div, dyn_div.lastChild);
    tab_div.appendChild(edit_img);
    tab_div.appendChild(del_img);
    tab_div.appendChild(tab_para);

    function delete_tab(){
        tab_div.remove();
    }

    function edit_tab(){
        let new_para = prompt("Edit your content", tab_para.innerHTML);
        tab_para.innerHTML = new_para;
    }
}