// ============================
// DESTINATION SEARCH
// ============================

function searchDestination() {

    let input =
        document.getElementById("search")
        .value
        .toLowerCase();

    let places =
        document.getElementsByClassName(
            "destination-card"
        );


    for (let i = 0; i < places.length; i++) {

        let name =
            places[i]
            .getElementsByTagName("h2")[0]
            .innerText
            .toLowerCase();


        if (name.includes(input)) {

            places[i].style.display = "block";

        } else {

            places[i].style.display = "none";

        }

    }

}


// ============================
// DESTINATION DETAILS
// ============================

function showPlace(place) {

    if (place === "Goa") {

        alert(
            "Goa\n\n" +
            "Goa is famous for its beaches, " +
            "sunsets and relaxing atmosphere."
        );

    }

    else if (place === "Manali") {

        alert(
            "Manali\n\n" +
            "Manali is a beautiful mountain " +
            "destination surrounded by nature."
        );

    }

    else if (place === "Jaipur") {

        alert(
            "Jaipur\n\n" +
            "Jaipur is known for its forts, " +
            "palaces and rich culture."
        );

    }

    else if (place === "Kerala") {

        alert(
            "Kerala\n\n" +
            "Kerala is famous for its greenery, " +
            "backwaters and beautiful landscapes."
        );

    }

}


// ============================
// BLOG BUTTON
// ============================

function readBlog(place) {

    alert(
        "Travel Blog: " +
        place +
        "\n\n" +
        "This is a simple travel blog post " +
        "about " + place + "."
    );

}


// ============================
// CONTACT FORM
// ============================

let form =
    document.getElementById("contactForm");


if (form) {

    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            let name =
                document.getElementById("name").value;


            alert(
                "Thank you, " +
                name +
                "!\n" +
                "Your message has been submitted."
            );


            form.reset();

        }
    );

}