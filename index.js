document.getElementById("exampleInputName").addEventListener("click", InputName);
document.getElementById("exampleInputLastName").addEventListener("click", InputLastName);
document.getElementById("exampleInputemailaddress").addEventListener("click", Inputemailaddres);
document.getElementById("exampleInputPassword1").addEventListener("click", InputPassword1);

document.getElementById("submit_btn").addEventListener("click", click_on_submit);

document.getElementById("exampleInputName").addEventListener("keyup", change_Input_Name);
document.getElementById("exampleInputLastName").addEventListener("keyup", change_Input_LastName);
document.getElementById("exampleInputemailaddress").addEventListener("keyup", change_Input_emailaddres);
document.getElementById("exampleInputPassword1").addEventListener("keyup", chamge_Input_Password1);

function InputName() {


    document.getElementById("Last_Name_Input_Border").style.borderColor = "#CED4DA";
    document.getElementById("Email_Input_Border").style.borderColor = "#CED4DA";
    document.getElementById("Password_Input_Border").style.borderColor = "#CED4DA";



    document.getElementById("Name_Input_Border").style.borderColor = "rgba(100, 100, 100, 1)";
    // document.getElementById("hole_input").style.boxShadow = "rgba(100, 100, 100, 1)";


}

function InputLastName() {


    document.getElementById("Name_Input_Border").style.borderColor = "#CED4DA";
    document.getElementById("Email_Input_Border").style.borderColor = "#CED4DA";
    document.getElementById("Password_Input_Border").style.borderColor = "#CED4DA";



    document.getElementById("Last_Name_Input_Border").style.borderColor = "rgba(100, 100, 100, 1)";
    // document.getElementById("hole_input").style.boxShadow = "rgba(100, 100, 100, 1)";

}

function Inputemailaddres() {


    document.getElementById("Name_Input_Border").style.borderColor = "#CED4DA";
    document.getElementById("Last_Name_Input_Border").style.borderColor = "#CED4DA";
    document.getElementById("Password_Input_Border").style.borderColor = "#CED4DA";



    document.getElementById("Email_Input_Border").style.borderColor = "rgba(100, 100, 100, 1)";
    // document.getElementById("hole_input").style.boxShadow = "rgba(100, 100, 100, 1)";

}

function InputPassword1() {


    document.getElementById("Name_Input_Border").style.borderColor = "#CED4DA";
    document.getElementById("Last_Name_Input_Border").style.borderColor = "#CED4DA";
    document.getElementById("Email_Input_Border").style.borderColor = "#CED4DA";



    document.getElementById("Password_Input_Border").style.borderColor = "rgba(100, 100, 100, 1)";
    // document.getElementById("hole_input").style.boxShadow = "rgba(100, 100, 100, 1)";

}



function click_on_submit() {


    let Name_Input = document.getElementById("exampleInputName").value;
    let Last_Name_Input = document.getElementById("exampleInputLastName").value;
    let Email_Input = document.getElementById("exampleInputemailaddress").value;
    let Password_Input = document.getElementById("exampleInputPassword1").value;
    let counter = 0;


    if (Name_Input == "") {

        document.getElementById("name_error_icon").classList.remove("d-none");
        document.getElementById("name_text_error").classList.remove("d-none");


        document.getElementById("name_error_icon").classList.add("d-block");
        document.getElementById("name_text_error").classList.add("d-block");



        document.getElementById("Name_Input_Border").style.borderColor = "hsl(0, 100%, 74%)";

        // console.log("error");

        document.getElementById("exampleInputName").placeholder = "";



    } else {

        document.getElementById("name_error_icon").classList.remove("d-block");
        document.getElementById("name_text_error").classList.remove("d-block");

        document.getElementById("name_error_icon").classList.add("d-none");
        document.getElementById("name_text_error").classList.add("d-none");

        document.getElementById("Name_Input_Border").style.borderColor = "hsl(154, 59%, 51%)";

        counter++;

    }




    if (Email_Input == "") {
        document.getElementById("email_error_icon").classList.remove("d-none");
        document.getElementById("email_text_error").classList.remove("d-none");


        document.getElementById("email_error_icon").classList.add("d-block");
        document.getElementById("email_text_error").classList.add("d-block");



        document.getElementById("Email_Input_Border").style.borderColor = "hsl(0, 100%, 74%)";


        document.getElementById("exampleInputemailaddress").classList.add('placeholder_style');

        document.getElementById("exampleInputemailaddress").placeholder = "email@example/com";


    } else {

        document.getElementById("email_error_icon").classList.remove("d-block");
        document.getElementById("email_text_error").classList.remove("d-block");

        document.getElementById("email_error_icon").classList.add("d-none");
        document.getElementById("email_text_error").classList.add("d-none");

        document.getElementById("Email_Input_Border").style.borderColor = "hsl(154, 59%, 51%)";

        counter++;

    }



    if (Last_Name_Input == "") {
        document.getElementById("last_name_error_icon").classList.remove("d-none");
        document.getElementById("last_name_text_error").classList.remove("d-none");


        document.getElementById("last_name_error_icon").classList.add("d-block");
        document.getElementById("last_name_text_error").classList.add("d-block");



        document.getElementById("Last_Name_Input_Border").style.borderColor = "hsl(0, 100%, 74%)";

        document.getElementById("exampleInputLastName").placeholder = "";


    } else {

        document.getElementById("last_name_error_icon").classList.remove("d-block");
        document.getElementById("last_name_text_error").classList.remove("d-block");

        document.getElementById("last_name_error_icon").classList.add("d-none");
        document.getElementById("last_name_text_error").classList.add("d-none");

        document.getElementById("Last_Name_Input_Border").style.borderColor = "hsl(154, 59%, 51%)";

        counter++;

    }


    if (Password_Input == "") {
        document.getElementById("password_error_icon").classList.remove("d-none");
        document.getElementById("password_text_error").classList.remove("d-none");


        document.getElementById("password_error_icon").classList.add("d-block");
        document.getElementById("password_text_error").classList.add("d-block");



        document.getElementById("Password_Input_Border").style.borderColor = "hsl(0, 100%, 74%)";

        document.getElementById("exampleInputPassword1").placeholder = "";


    } else {

        document.getElementById("password_error_icon").classList.remove("d-block");
        document.getElementById("password_text_error").classList.remove("d-block");

        document.getElementById("password_error_icon").classList.add("d-none");
        document.getElementById("password_text_error").classList.add("d-none");

        document.getElementById("Password_Input_Border").style.borderColor = "hsl(154, 59%, 51%)";

        counter++;

    }









    if (counter == 4) {
        document.getElementById("form").onsubmit = function() {
            return true;
        }
    } else {
        document.getElementById("form").onsubmit = function() {
            return false;
        }
    }






}


function change_Input_Name() {
    let Name_Input = document.getElementById("exampleInputName").value;

    if (Name_Input == "") {

        document.getElementById("name_error_icon").classList.remove("d-none");
        document.getElementById("name_text_error").classList.remove("d-none");


        document.getElementById("name_error_icon").classList.add("d-block");
        document.getElementById("name_text_error").classList.add("d-block");



        document.getElementById("Name_Input_Border").style.borderColor = "hsl(0, 100%, 74%)";

        // console.log("error");

        document.getElementById("exampleInputName").placeholder = "";



    } else {

        document.getElementById("name_error_icon").classList.remove("d-block");
        document.getElementById("name_text_error").classList.remove("d-block");

        document.getElementById("name_error_icon").classList.add("d-none");
        document.getElementById("name_text_error").classList.add("d-none");

        document.getElementById("Name_Input_Border").style.borderColor = "hsl(154, 59%, 51%)";

        counter++;

    }
}


function change_Input_LastName() {
    let Last_Name_Input = document.getElementById("exampleInputLastName").value;


    if (Last_Name_Input == "") {
        document.getElementById("last_name_error_icon").classList.remove("d-none");
        document.getElementById("last_name_text_error").classList.remove("d-none");


        document.getElementById("last_name_error_icon").classList.add("d-block");
        document.getElementById("last_name_text_error").classList.add("d-block");



        document.getElementById("Last_Name_Input_Border").style.borderColor = "hsl(0, 100%, 74%)";

        document.getElementById("exampleInputLastName").placeholder = "";


    } else {

        document.getElementById("last_name_error_icon").classList.remove("d-block");
        document.getElementById("last_name_text_error").classList.remove("d-block");

        document.getElementById("last_name_error_icon").classList.add("d-none");
        document.getElementById("last_name_text_error").classList.add("d-none");

        document.getElementById("Last_Name_Input_Border").style.borderColor = "hsl(154, 59%, 51%)";

    }
}


function change_Input_emailaddres() {

    let Email_Input = document.getElementById("exampleInputemailaddress").value;
    if (Email_Input == "") {
        document.getElementById("email_error_icon").classList.remove("d-none");
        document.getElementById("email_text_error").classList.remove("d-none");


        document.getElementById("email_error_icon").classList.add("d-block");
        document.getElementById("email_text_error").classList.add("d-block");



        document.getElementById("Email_Input_Border").style.borderColor = "hsl(0, 100%, 74%)";


        document.getElementById("exampleInputemailaddress").classList.add('placeholder_style');

        document.getElementById("exampleInputemailaddress").placeholder = "email@example/com";


    } else {

        document.getElementById("email_error_icon").classList.remove("d-block");
        document.getElementById("email_text_error").classList.remove("d-block");

        document.getElementById("email_error_icon").classList.add("d-none");
        document.getElementById("email_text_error").classList.add("d-none");

        document.getElementById("Email_Input_Border").style.borderColor = "hsl(154, 59%, 51%)";



    }
}



function chamge_Input_Password1() {

    let Password_Input = document.getElementById("exampleInputPassword1").value;

    if (Password_Input == "") {
        document.getElementById("password_error_icon").classList.remove("d-none");
        document.getElementById("password_text_error").classList.remove("d-none");


        document.getElementById("password_error_icon").classList.add("d-block");
        document.getElementById("password_text_error").classList.add("d-block");



        document.getElementById("Password_Input_Border").style.borderColor = "hsl(0, 100%, 74%)";

        document.getElementById("exampleInputPassword1").placeholder = "";


    } else {

        document.getElementById("password_error_icon").classList.remove("d-block");
        document.getElementById("password_text_error").classList.remove("d-block");

        document.getElementById("password_error_icon").classList.add("d-none");
        document.getElementById("password_text_error").classList.add("d-none");

        document.getElementById("Password_Input_Border").style.borderColor = "hsl(154, 59%, 51%)";



    }
}