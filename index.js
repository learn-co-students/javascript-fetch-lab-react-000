
const api = 'https://api.github.com/'

function getIssues() {

}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
    const template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
    document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${api}repos/${repo}/forks`, {
      method: 'post',
      headers: {
          Authorization: `token ${getToken()}`
      }
  }).then(resp => resp.json()).then(json => console.log(json))
}

function getToken() {
    return '469075fe8b8465eae5cf64565fd31838ce25c33d'
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return ''
}
