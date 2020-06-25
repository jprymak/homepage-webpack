fetch('https://api.github.com/users/jprymak/repos')
.then(resp =>resp.json())
.then(resp=>{
  for(let repo of resp){
    const {name, html_url} = repo;
    
    const repositoryList = document.querySelector('.repo-list--js');
    const myTemplate = `<li> ${name}:  <a href="${html_url}" target="_blank">${html_url}<a/></li>`

    repositoryList.innerHTML+=myTemplate;
  }
})
.catch(error => console.log('error'))
