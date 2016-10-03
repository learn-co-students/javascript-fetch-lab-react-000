const username = 'lukeghenco'
const api = 'https://api.github.com/'
const fork = `${username}/javascript-fetch-lab`

function getIssues() {
    fetch(`${api}repos/${fork}/issues`)
        .then(resp => resp.json())
        .then(json => showIssues(json))
}

function showIssues(json) {

    // No Handlebars code
    // ===================
    // var parent = document.getElementById("issues");
    //
    // json.map(issue => {
    //     var div = document.createElement('div');
    //     var h2 = document.createElement('h2');
    //     var a = document.createElement('a');
    //     var p = document.createElement('p');
    //     a.setAttribute('href', issue.html_url);
    //     a.innerHTML = issue.title;
    //     h2.appendChild(a);
    //     div.appendChild(h2);
    //     p.innerHTML = issue.body;
    //     div.appendChild(p);
    //     parent.appendChild(div)
    // })

    const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
    document.getElementById('issues').innerHTML = template(json)

}

function createIssue() {
    const title = document.getElementById('title').value
    const body = document.getElementById('body').value
    const data = {
        title: title,
        body: body
    }

    fetch(`${api}repos/${fork}/issues`, {
        method: 'post',
        headers: {
            Authorization: `token ${getToken()}`
        },
        body: JSON.stringify(data)
    })
        .then(resp => getIssues())
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
  }).then(resp => resp.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
