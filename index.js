function getIssues() {
  const repo = 'learn-co-students/javascript-fetch-lab-react-000'
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(issues) {
  let source = document.getElementById('issues-template').innerHTML;
  let template = Handlebars.compile(source);
  let issuesHtml = template(issues);
  document.getElementById('issues').innerHTML = issuesHtml;
}

function createIssue() {
  const repo = 'learn-co-students/javascript-fetch-lab-react-000'
  let postData = {
    body: document.getElementById('body').value,
    title: document.getElementById('title').value
  }
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => {
    getIssues();
  })
}

function showResults(json) {
  let source = document.getElementById('repo-template').innerHTML;
  let template = Handlebars.compile(source);
  document.getElementById('results').innerHTML = template(json);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => {
    showResults(json);
  });
}

// function getToken() {
//   //change to your token to run in browser, but set
//   //back to '' before committing so all tests pass
//   return ''
// }

getIssues();
