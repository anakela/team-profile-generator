function renderCard(employee) {
    switch (employee) {
        case 'Manager':
            return `
<div class="card">
  <div class="card-header" id="manager-card">
    <h4>Manager</h4><br />
    <h5><i class="fa-solid fa-mug-hot"></i>${addManager(data.manager)}</h5>
  </div>
  <div class="card-body">
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${addManager(data.id)}</li>
            <li class="list-group-item">Email: <a href="mailto:${addManager(data.email)}" title="Email me!">${addManager(data.email)}</a></li>
            <li class="list-group-item">Office Number: ${addManager(data.offNum)}</li>
        </ul>
    </div>
  </div>
</div>
            `;
        case 'Engineer':
            return `
<div class="card" id="engineer-card">
  <div class="card-header">
    <h4>${addEngInt(data.employeeName)}</h4>
    <h5><i class="fa-solid fa-glasses"></i>${addEngInt(data.addEngInt)}</h5>
  </div>
  <div class="card-body">
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${addEngInt(data.id)}</li>
            <li class="list-group-item">Email: ${addEngInt(data.email)}</li>
            <li class="list-group-item">GitHub: <a href="https://www.github.com/${addEngInt(data.github)}" title="Visit My GitHub Profile!" target="_blank">${addEngInt(data.github)}</a></li>
        </ul>
    </div>
  </div>
</div>
            `;
        case 'Intern':
            return `
<div class="card" id="intern-card">
  <div class="card-header">
    <h4>${addEngInt(data.employeeName)}</h4>
    <h5><i class="fa-solid fa-graduation-cap"></i>${addEngInt(data.addEngInt)}</h5>
  </div>
  <div class="card-body">
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${addEngInt(data.id)}</li>
            <li class="list-group-item">Email: <a href="mailto:${addEngInt(data.email)}" title="Email me!">${addEngInt(data.email)}</a></li>
            <li class="list-group-item">School: ${addEngInt(data.school)}</li>
        </ul>
    </div>
  </div>
</div>
            `;
    }
};

function generateHtmlPage() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    <link rel="stylesheet" href="../../assets/css/style.css">
    <title>My Team</title>
</head>
<body>
    <nav class="navbar bg-danger">
        <div class="container-fluid justify-content-center">
          <span class="navbar-brand mb-0 h1 text-white"><h2>My Team</h2></span>
        </div>
      </nav>

      <main class="row col-sm-12 justify-content-center align-content-center" id="main">
        ${renderCard()}
      </main>
</body>
</html>
    `;
};

module.exports = generateHtmlPage;