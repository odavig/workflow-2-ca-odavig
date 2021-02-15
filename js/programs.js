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
  const latestNews = document.querySelector(".latestNews")

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
const results = json.project // variable name results if ok, but if we optimise for readability a nicer var name could be: nasaProject, projectNasa
  console.log(results)

  latestNews.style.textAlign = "left"

  const newHtml = `
  <h4>${results.title}</h4>
  <ul>
    <li>${results.status} // then in here we can say ${nasaProject.status} </li>
    <li>${results.endDate}</li>
    <li id="newsBoxLink"><a href="${results.website}">Click here to read more</a></li>
  </ul>
  `
  newsBox.innerHTML = newHtml

  const newsHTML = `
  <h2 class="sectionSubHeading">${results.title}</h2>
  <ul>
    <li><i>Start date: </i>${results.startDate}</li>
    <li><i>End date: </i>${results.endDate}</li>
  </ul>
  <p class="sectionParagraph"> <i>Description: </i>${results.description} <i>Benefits: </i>${results.benefits} Read more about this mission <a href="${results.website}">here.</a>
  Or check out every mission at <a href="https://www.nasa.gov/missions/">NASA.</a></p>
  `
  latestNews.innerHTML = newsHTML
}

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

function openNavFunc() {
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
