let mode = "light";
let body = document.body;
let toggle_btn = document.getElementById("toggle-btn");
let link_1 = document.getElementById("link-1");
let link_2 = document.getElementById("link-2");
let link_3 = document.getElementById("link-3");
let link_4 = document.getElementById("link-4");

function change_mode() {

    if (mode === "light") {

        body.style.backgroundColor = "black";
        body.style.color = "white";
        toggle_btn.style = "justify-content: end";
        link_1.style = "color: white;";
        link_2.style = "color: white;";
        link_3.style = "color: white;";
        link_4.style = "color: white;";
        mode = "dark";

    }

    else {

        body.style.backgroundColor = "white";
        body.style.color = "black";
        toggle_btn.style = "justify-content: start";
        link_1.style = "color: black;";
        link_2.style = "color: black;";
        link_3.style = "color: black;";
        link_4.style = "color: black;";
        mode = "light";

    }

}

// --------------------------------------------------------------------------------------------------

function sign_up() {

    let name = document.getElementById("name");
    let e_mail = document.getElementById("e-mail");
    let number = document.getElementById("number");
    let password = document.getElementById("password");
    let c_password = document.getElementById("c-password");

    if (name.value == "") {

        alert("Please Enter Your Full Name!");

    }

    else if (e_mail.value == "") {

        alert("Please Enter Your E-Mail Address!");

    }

    else if (number.value == "") {

        alert("Please Enter Your Mobile Number!");

    }

    else if (password.value == "") {

        alert("Please Enter Your Password!");

    }

    else if (c_password.value == "") {

        alert("Please Enter Your Confirm Password!");

    }

    else if (c_password.value !== password.value) {

        alert("Confirm Password Is Not Same As Password!");

    }

    else {

        let get_data = JSON.parse(localStorage.getItem("user")) || [];
        let new_user = { name: name.value, e_mail: e_mail.value, number: number.value, password: password.value, c_password: c_password.value };
        get_data.push(new_user);
        localStorage.setItem("user", JSON.stringify(get_data));

        name.value = "";
        e_mail.value = "";
        e_mail.value = "";
        number.value = "";
        password.value = "";
        c_password.value = "";

        alert("You Are Now Registered! Please Log In!");

        window.location = "Login Page.html";

    }

}

// --------------------------------------------------------------------------------------------------

function log_in() {

    let e_mail = document.getElementById("e-mail");
    let password = document.getElementById("password");
    let checkbox = document.getElementById("check");

    let get_data = JSON.parse(localStorage.getItem("user")) || [];
    let filtered_data = get_data.filter((filtered_data) => filtered_data.e_mail == e_mail.value);
    let existed_data = filtered_data[0];

    if (e_mail.value == "") {

        alert("Please Enter Your E-Mail Address!");

    }

    else if (password.value == "") {

        alert("Please Enter Your Password!");

    }

    else if (password.value != existed_data.password) {

        alert("Please Enter Correct Password!");

    }

    else if (checkbox.checked == false) {

        alert("Please Select The Check Box!");

    }

    else if (e_mail.value == existed_data.e_mail && password.value == existed_data.password) {

        e_mail.value = "";
        password.value = "";

        alert("You Are Now Logged In! Please Shop!");

        window.location = "index.html";

    }

}

// --------------------------------------------------------------------------------------------------

let main_image = document.getElementById("main-img");

function change_image(path) {

    main_image.setAttribute("src", path);

}

// --------------------------------------------------------------------------------------------------

let input = document.getElementById("input");

function increase() {

    let inputvalue = parseInt(input.value);
    let newinputvalue = inputvalue + 1;
    input.value = newinputvalue;

}

function decrease() {

    if (input.value > 1) {

        let inputvalue = parseInt(input.value);
        let newinputvalue = inputvalue - 1;
        input.value = newinputvalue;

    }

}

// --------------------------------------------------------------------------------------------------

let cart_count = document.getElementById("nav-cart-count");

function add_to_cart() {

    alert("Added To Cart!");

    cart_count.innerText++;

    localStorage.setItem("count", JSON.stringify(cart_count.innerText));

}

cart_count.innerText = JSON.parse(localStorage.getItem("count")) || ["3"];

// --------------------------------------------------------------------------------------------------

function offer() {

    prompt("Please Enter Your Coupen Code Here!");

}
