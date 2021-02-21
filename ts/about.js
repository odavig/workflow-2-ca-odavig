"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nav_1 = require("./components/nav");
nav_1.openNav();
var url = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=6&exlimit=1&titles=NASA&explaintext=1&formatversion=2&format=json"; // from today onwards lets UPPERCASE our contastants that have data in them that will never change e.g. WIKI_API_URL
var wikipediaText = document.querySelector("#wikipediaText");
var newHtml;
fetch(url)
    .then(function (response) {
    return response.json();
})
    .then(function (json) {
    handleJson(json);
})
    .catch(function (error) {
    handleError(error);
});
function handleJson(json) {
    var results = json.query.pages;
    var source = " <i> Information about NASA gotten from https://en.wikipedia.org/wiki/NASA </i>";
    for (var i = 0; i < results.length; i++) {
        newHtml = (results[i].extract);
    }
    wikipediaText.innerHTML = newHtml + source;
}
function handleError(error) {
    console.log(error);
}
var newsUrl = "https://api.nasa.gov/techport/api/projects?api_key=s1t0dgdnK3sCldGLGkOSNrGW7Oe7hbLd7VwTs44M";
fetch(newsUrl)
    .then(function (response) {
    return response.json();
})
    .then(function (json) {
    handleNewsJson(json);
})
    .catch(function (error) {
    handleNewsError(error);
});
function handleNewsJson(json) {
    var results = json.projects.projects;
    console.log(results[0].id);
    var newsUrl = "https://api.nasa.gov/techport/api/projects/" + results[0].id + "?api_key=s1t0dgdnK3sCldGLGkOSNrGW7Oe7hbLd7VwTs44M";
    var newsBox = document.querySelector("#newsBox");
    fetch(newsUrl)
        .then(function (response) {
        return response.json();
    })
        .then(function (json) {
        handleNewsJsonAgain(json);
    })
        .catch(function (error) {
        handleNewsError(error);
    });
    function handleNewsJsonAgain(json) {
        var results = json.project;
        console.log(results);
        newHtml = "\n  <h4>" + results.title + "</h4>\n  <ul>\n    <li>" + results.status + "</li>\n    <li>" + results.endDate + "</li>\n    <li id=\"newsBoxLink\"><a href=\"" + results.website + "\">Click here to read more</a></li>\n  </ul>\n  ";
        newsBox.innerHTML = newHtml;
    }
}
function handleNewsError(error) {
    console.log(error);
}
var sectionheading = document.querySelector(".sectionheading");
