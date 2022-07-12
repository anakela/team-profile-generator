function generateCards(employArr) {
  let str = '';
  for (let i = 0; i < employArr.length; i++) {
    str += renderCard(employArr[i]);
  }
  return str;
}

function renderCard(employee) {
  switch (employee.getRole()) {
    case 'Manager':
      return `
<div class="card col-sm-3" id="manager-card">
  <div class="card-header bg-primary text-white">
    <h4>${employee.name}</h4>
    <h5><i class="fa-solid fa-mug-hot"></i>${employee.getRole()}</h5>
  </div>
  <div class="card-body">
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}?subject=Email Me" title="Email Me">${employee.email}</a></li>
            <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
        </ul>
    </div>
  </div>
</div>
            `;
      break;
    case 'Engineer':
      return `
<div class="card col-sm-3" id="engineer-card">
  <div class="card-header bg-primary text-white">
    <h4>${employee.name}</h4>
    <h5><i class="fa-solid fa-glasses"></i>${employee.getRole()}</h5>
  </div>
  <div class="card-body">
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}?subject=Email Me" title="Email Me">${employee.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://www.github.com/${employee.github}" title="Visit My GitHub Profile!" target="_blank">${employee.github}</a></li>
        </ul>
    </div>
  </div>
</div>
            `;
      break;
    case 'Intern':
      return `
<div class="card col-sm-3" id="intern-card">
  <div class="card-header bg-primary text-white">
    <h4>${employee.name}</h4>
    <h5><i class="fa-solid fa-graduation-cap"></i>${employee.getRole()}</h5>
  </div>
  <div class="card-body">
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}?subject=Email Me" title="Email Me">${employee.email}</a></li>
            <li class="list-group-item">School: ${employee.school}</li>
        </ul>
    </div>
  </div>
</div>
            `;
      break;
  }
};

function generateHtmlPage(employArr) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    <link rel="stylesheet" href="../assets/css/style.css">
    <title>My Team</title>
</head>
<body>
    <nav class="navbar bg-danger">
        <div class="container-fluid justify-content-center">
          <span class="navbar-brand mb-0 h1 text-white"><h2>My Team</h2></span>
        </div>
      </nav>

      <main class="row col-sm-12 justify-content-center align-content-center" id="main">
        ${generateCards(employArr)}
      </main>
</body>
</html>
    `;
};

module.exports = generateHtmlPage;