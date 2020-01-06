var table = new Vue({
    el: "#list-social",
    data: {
        socialMedia: [
            {
                class: "fa-envelope",
                href: "mailto:aku@mwafa.net",
                text: "aku@mwafa.net",
            },
            {
                class: "fa-twitter",
                href: "https://twitter.com/eiwafa__",
                text: "@eiwafa__",
            },
            {
                class: "fa-globe",
                href: "https://mwafa.net",
                text: "mwafa.net",
            },
            {
                class: "fa-link",
                href: "https://eiwafa.blogspot.com",
                text: "eiwafa.blogspot.com",
            },
        ],
        person: {
            name: "Muhammad Wafa",
            picture: "asset/avatar.jpg",
            desc: "Web Developer"
        }
    }
})