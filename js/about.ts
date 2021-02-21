import { openNav } from './components/nav'
openNav()

const url = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=6&exlimit=1&titles=NASA&explaintext=1&formatversion=2&format=json" // from today onwards lets UPPERCASE our contastants that have data in them that will never change e.g. WIKI_API_URL
const wikipediaText = document.querySelector("#wikipediaText")

let newHtml: string;

fetch(url)
.then(function(response) {
        return response.json();
    })
    .then(function(json) {
        handleJson(json);
    })
    .catch(function(error) {
        handleError(error);
    });

function handleJson(json) {
  const results = json.query.pages;
  const source = " <i> Information about NASA gotten from https://en.wikipedia.org/wiki/NASA </i>"
  for (var i = 0; i < results.length; i++) {
    newHtml = (results[i].extract)
  }
  wikipediaText.innerHTML = newHtml + source
}

function handleError(error) {
  console.log(error)
}

const newsUrl = "https://api.nasa.gov/techport/api/projects?api_key=s1t0dgdnK3sCldGLGkOSNrGW7Oe7hbLd7VwTs44M"

fetch(newsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        handleNewsJson(json);
    })
    .catch(function(error) {
        handleNewsError(error);
    });

function handleNewsJson(json) {
  const results = json.projects.projects;

  console.log(results[0].id)

  const newsUrl = `https://api.nasa.gov/techport/api/projects/${results[0].id}?api_key=s1t0dgdnK3sCldGLGkOSNrGW7Oe7hbLd7VwTs44M`
  const newsBox = document.querySelector("#newsBox")

  fetch(newsUrl)
      .then(function(response) {
          return response.json();
      })
      .then(function(json) {
          handleNewsJsonAgain(json);
      })
      .catch(function(error) {
          handleNewsError(error);
      });

function handleNewsJsonAgain(json) {
  const results = json.project
  console.log(results)

  newHtml = `
  <h4>${results.title}</h4>
  <ul>
    <li>${results.status}</li>
    <li>${results.endDate}</li>
    <li id="newsBoxLink"><a href="${results.website}">Click here to read more</a></li>
  </ul>
  `
  newsBox.innerHTML = newHtml
}
}

function handleNewsError(error) {
  console.log(error)
}

const sectionheading = document.querySelector(".sectionheading")
