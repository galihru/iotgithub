const fs = require('fs');
const path = require('path');

class GithubIoT {
  static start() {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GitHub IoT App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    
    header {
      background-color: #333;
      color: #fff;
      padding: 10px 20px;
      text-align: center;
    }
    
    header .logo {
      font-size: 24px;
      font-weight: bold;
    }
    
    main {
      padding: 20px;
    }
    
    footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 10px;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>
  <githubiot-app>
    <header>
      <div class="logo">Your Logo</div>
      <h1>{{ site_title }}</h1>
    </header>
    <main>
      <h2>{{ chart_title }}</h2>
      <canvas id="iotChart"></canvas>
    </main>
    <footer>
      <p>&copy; Generated Automation From GH Action. All rights reserved.</p>
    </footer>
  </githubiot-app>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    <header>
    <div class="logo">Your Logo</div>
    <h1>{{ site_title }}</h1>
  </header>
  <main>
    <h2>{{ chart_title }}</h2>
    <canvas id="iotChart"></canvas>
  </main>
  <footer>
    <p>&copy; Generated Automation From GH Action. All rights reserved.</p>
  </footer>
  <script>
    fetch('{{ json_filename }}')
      .then(response => response.json())
      .then(data => {
        const ctx = document.getElementById('iotChart').getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.labels,
            datasets: [{
              label: 'IoT Data',
              data: data.values,
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      });
  </script>
</body>
</html>
    `;

    const filePath = path.join(__dirname, 'index.html');
    fs.writeFileSync(filePath, htmlContent);
    console.log(`File created at ${filePath}`);
  }
}

module.exports = GithubIoT;
