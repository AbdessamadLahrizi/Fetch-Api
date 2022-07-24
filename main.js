// Main Variables
let theInput = document.querySelector(".get-repos input")
getButton = document.querySelector(".get-button"),
    reposData = document.querySelector(".show-data");

getButton.onclick = function () {
    // Run function
    getRepos();
}

// Get Repos functions
function getRepos() {
    if (theInput.value === "") {
        reposData.innerHTML = "<span>Please write Repos Username</span>";
    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
            .then((response) => response.json())
            .then((data) => {
                // Make show Data space empty.
                reposData.innerHTML = "";
                data.forEach(repo => {
                    //create main div
                    let mainDiv = document.createElement("div");
                    // create repo name text
                    let repoName = document.createTextNode(repo.name);
                    // Append the text to main div
                    mainDiv.appendChild(repoName);

                    // create profile repo link.
                    let theURL = document.createElement("a");

                    // add url text
                    let textUrl = document.createTextNode("Visite");

                    // add href link
                    theURL.href = `https://github.com/${theInput.value}/${repo.name}`;

                    // Set attr
                    theURL.setAttribute("target", "_blank");

                    // append the text to url tag
                    theURL.appendChild(textUrl);

                    // Append the url to main div
                    mainDiv.appendChild(theURL);

                    // create stars span
                    let starsSpan = document.createElement("span");

                    // create text
                    let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                    // append text to span
                    starsSpan.appendChild(starsText);

                    //append span to main div
                    mainDiv.appendChild(starsSpan)

                    // add class to main div
                    mainDiv.className = "repo-box";



                    // Append the main div to container
                    reposData.appendChild(mainDiv)
                })
            })
    }
};