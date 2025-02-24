# IoT Dashboard Generator

This GitHub Action generates an IoT dashboard with a chart using JSON data.

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

---
