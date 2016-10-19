function getIssues() {
  const repo = 'javascript-fetch-lab';
  fetch('https://api.github.com/repos/' + repo + '/issues', {
    method: 'GET'
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  var issuesDiv = document.getElementById('issues');
  var source = 
  document.getElementById('issues-template').innerHTML;
  var template = Handlebars.compile(source);
  var context = json;
  issuesDiv.innerHTML = template(context);
}

function createIssue() {
  const repo = 'javascript-fetch-lab';
  var title = document.getElementById('title').value;
  var text = document.getElementById('body').value;
  var postData = {
    title: title,
    body: text
  }
  fetch('https://api.github.com/repos/' + repo + '/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
    })
    .then(res => getIssues())
 } 

function showResults(json) {
  var results = document.getElementById('results');
  var source = 
  document.getElementById('repo-template').innerHTML;
  var template = Handlebars.compile(source);
  var context = json;
  var html = template(context);
  results.innerHTML = html;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  const token = '';
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token;
}
