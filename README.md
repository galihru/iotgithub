# IoT Dashboard Generator

## About

This GitHub Action generates an IoT dashboard with a chart using JSON data.

* [Usage](#usage)
* [Inputs](#inputs)
* [IoT Generated Arduino](#iot-generated-arduino)
* [Contributing](#contributing)
* [License](#license)

## Usage

```yaml
- name: Generate IoT Dashboard
  uses: your-username/your-repo@v1
  with:
    json_filename: 'data.json'
    html_filename: 'index.html'
    css_filename: 'styles.css'
    site_title: 'My IoT Dashboard'
    chart_title: 'IoT Data Chart'
```
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
