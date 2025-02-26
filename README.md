# IoT Dashboard Generator

<p align="center">
  <img src="https://4211421036.github.io/githubiotpy/img/GitHub%20IoT%20Logo.png" alt="GitHubIoT Logo">
</p>

## About

This GitHub Action (GA) automates the creation of a fully functional IoT dashboard that visualizes data using interactive charts. The GA is integrated with the Arduino IDE platform. You can integrate this GA by using the `githubiot` module in the `.ino` code. Then, upload the code to one of your microcontrollers (ESP32 or ESP8266).

---

* [Usage](#usage)
* [Inputs](#inputs)
* [IoT Generated Arduino](#iot-generated-arduino)
* [Contributing](#contributing)
* [License](#license)

## Usage

1. Copy the following `.yml` code, then paste it into your `.yml` file

```yaml
- name: Generate IoT Dashboard
  uses: 4211421036/iotgithub@v1.0.1
  with:
    json_filename: 'data.json'
    html_filename: 'index.html'
    css_filename: 'styles.css'
    site_title: 'My IoT Dashboard'
    chart_title: 'IoT Data Chart'
- name: Commit and push changes
  run: |
    git config --global user.name "GitHub Actions"
    git config --global user.email "actions@github.com"
    git add .
    if git commit -m "Auto-generated IoT dashboard files"; then
      git push
    else
      echo "No changes to commit."
    fi
```

2. Go to your repository settings, then select the Action menu then select the General menu after that select Read and write permissions
The workflow has read and write permissions in the repository for all scopes in the Workflow permissions section.

## Inputs
- `json_filename`: Name of the JSON file (default: `data.json`)

- `html_filename`: Name of the HTML file (default: `index.html`)

- `css_filename`: Name of the CSS file (default: `styles.css`)

- `site_title`: Title of the website (default: `IoT Dashboard`)

- `chart_title`: Title of the chart (default: `IoT Data Chart`)

## Author
GALIH RIDHO UTOMO

## IoT Generated Arduino
This repository contains a website that utilizes automation to generate files, thereby facilitating the visualization of graphs in real time. The integration of the Internet of Things (IoT) with the ESP32 or ESP8266 development in the Arduino IDE is a notable feature of this repository. To access the repository, navigate to the GitHub IoT repository within the Arduino IDE and enter the search term `githubiot`

## Contributing
Would you like to contribute? please read my rules [`CONTRIBUTING`](https://github.com/4211421036/iotgithub/blob/main/CONTRIBUTING.md) for more details

Thanks again for your contribute, it is much appreciated! 🙏

## License
MIT. See `LICENSE` for more details.

---
