"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nav_1 = require("./components/nav");
nav_1.openNav();
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
    var newsBox = (document.querySelector("#newsBox"));
    var latestNews = (document.querySelector(".latestNews"));
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
        latestNews.style.textAlign = "left";
        var newHtml = "\n  <h4>" + results.title + "</h4>\n  <ul>\n    <li>" + results.status + " </li>\n    <li>" + results.endDate + "</li>\n    <li id=\"newsBoxLink\"><a href=\"" + results.website + "\">Click here to read more</a></li>\n  </ul>\n  ";
        newsBox.innerHTML = newHtml;
        var newsHTML = "\n  <h2 class=\"sectionSubHeading\">" + results.title + "</h2>\n  <ul>\n    <li><i>Start date: </i>" + results.startDate + "</li>\n    <li><i>End date: </i>" + results.endDate + "</li>\n  </ul>\n  <p class=\"sectionParagraph\"> <i>Description: </i>" + results.description + " <i>Benefits: </i>" + results.benefits + " Read more about this mission <a href=\"" + results.website + "\">here.</a>\n  Or check out every mission at <a href=\"https://www.nasa.gov/missions/\">NASA.</a></p>\n  ";
        latestNews.innerHTML = newsHTML;
    }
}
function handleNewsError(error) {
    console.log(error);
}
var sectionheading = document.querySelector(".sectionheading");
