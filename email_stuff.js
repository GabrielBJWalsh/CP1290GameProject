$(document).ready(function () {
    $("#email").focus();
    $("#email_form").validate(
        {
            rules: {
                email: {
                    required: true,
                    email: true
                },
                email2: {
                    required: true,
                    email: true,
                    equalTo: "#email"
                },
                lname: {required: true},
                fname: {required: true},
                state: {
                    required: true,
                    rangelength: [2, 2],
                    digits: false
                },
                zip: {
                    required: true,
                    digits: true,
                    rangelength: [5, 5],
                }


            },
            messages: {
                email2: {equalTo: "Email must match previous email."},

                }

        }
    )


}); // end ready
