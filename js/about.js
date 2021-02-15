const url = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=6&exlimit=1&titles=NASA&explaintext=1&formatversion=2&format=json" // from today onwards lets UPPERCASE our contastants that have data in them that will never change e.g. WIKI_API_URL
const wikipediaText = document.querySelector("#wikipediaText")

fetch(url)
.then(function(response) { // convert to arrow function, we can use it here because we dont really need access to the "this" keyword.
        return response.json();
    })
    .then(function(json) {
        handleJson(json);
    })
    .catch(function(error) {
        handleError(error);
    });

function handleJson(json) { // handleJson as a function name is ok. A better name could be fetchWikiPediaText, or if thats to specific because its a utility function to be used many times over: getWikis, getWikik.
  const results = json.query.pages;
  const source = " <i> Information about NASA gotten from https://en.wikipedia.org/wiki/NASA </i>"
  console.log(results) // always delete console logs, do not ship logs to production, it slows server down.
  for (var i = 0; i < results.length; i++) {
    newHtml = (results[i].extract)
  }
  wikipediaText.innerHTML = newHtml + source
}

function handleError() {
  console.log("error.html")
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

  const newHtml = `
  <h4>${results.title}</h4>
  <ul>
    <li>${results.status}</li>
    <li>${results.endDate}</li>
    <li id="newsBoxLink"><a href="${results.website}">Click here to read more</a></li>
  </ul>
  `
  newsBox.innerHTML = newHtml
}
// use pretteir, code formatter to autoindent the file.
}

function handleNewsError() {
  console.log("error.html")
}

const openNavBtn = document.querySelector("#openNav")
const closeNavBtn = document.querySelector("#closeNav")
const nav = document.querySelector("#nav")
const header = document.querySelector("#header")
const sectionheading = document.querySelector(".sectionheading")

openNav.addEventListener("click", openNavFunc)
closeNav.addEventListener("click", closeNavFunc)

// really happy to see small single purpose functions, well done.
function openNavFunc() { // Func? openNavigation is a fine name. it is a function you are writing so having the Func in the name is redundent
  nav.style.display  = "block"
  header.style.backgroundColor = "white"
  header.style.backgroundImage = "none"
  header.style.height = "100vh"
  sectionheading.style.display = "none"
}

function closeNavFunc() {
  nav.style.display  = "none"
  header.style.backgroundColor = "transparent"
  sectionheading.style.display = "block"
  header.style.backgroundImage = "url(media/hubble-telescope.jpg)"
  header.style.height = "250px"
}
