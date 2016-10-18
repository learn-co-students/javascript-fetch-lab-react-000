function getIssues() {
  const repo = 'talum/javascript-fetch-lab-react-000';
  fetch('https://api.github.com/repos/' + repo + '/issues', {
    method: 'GET'
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  var issuesDiv = document.getElementById('issues');
  var source = 
  document.getElementById('issues-template').innerHTML;
  var template = Handlebars.compile(source);
  var listHtml = json.map((issue) => {
    var context = {link: issue.url, title: issue.title, body: issue.body};
    return template(context);
})
  issuesDiv.innerHTML = listHtml;
}

function createIssue() {
  const repo = 'talum/javascript-fetch-lab-react-000';
  var title = document.getElementById('title').value;
  var text = document.getElementById('body').value;
  var postData = {
    title: title,
    body: text
  }
  fetch('https://api.github.com/repos/' + repo + '/issues', {
    method: 'POST',
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
  var context = {html_url: json.html_url, full_name: json.full_name};
  var html = template(context);
  results.innerHTML = html;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: 'POST',
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
