function renderCard(employee) {
    switch (employee) {
        case 'Manager':
            return `
<div class="card">
  <div class="card-header">
    ${data.name}<br />
    ${data.}
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            `;
        case 'Engineer':
            return ``;
        case 'Intern':
            return ``;
    }
};

function generateHtmlPage() {

};

module.exports = generateHtmlPage;