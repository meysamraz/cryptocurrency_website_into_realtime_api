# Cryptocurrency Website into Real-Time API

![alt Text](src/back_and_front.jpg)

## Project Description

Have you ever wanted to get real-time data from a website that didn't offer an API? I faced this exact challenge and found a solution using [ScrapyRT](https://scrapyrt.readthedocs.io/en/stable/).

In my case, I wanted to access up-to-the-minute cryptocurrency data from [Coingecko](https://www.coingecko.com/) , a popular cryptocurrency information website. The data I needed included currency titles, icon images, prices, 1-hour price changes, 24-hour price changes, and 7-day price changes. These are crucial metrics for cryptocurrency enthusiasts and traders, as they provide insights into market trends.

To accomplish this, I employed ScrapyRT to crawl Coingecko's website, sending requests and parsing the HTML code to extract the desired data. With this data in hand, I used Flask to create an API, decoding the information scraped by ScrapyRT.

But I didn't stop there. I went a step further and built a simple web application using React.js to test and showcase the real-time data. Now, users can explore the latest cryptocurrency information through an intuitive and interactive interface.

Whether you're a cryptocurrency enthusiast, trader, or simply curious about real-time data extraction, this project offers a solution to a common challenge in the world of web scraping

## Problem Statement

Cryptocurrency market data is highly volatile and can change rapidly. Traditional websites often fail to provide real-time data, leaving users with outdated information. This project addresses this critical issue by transforming a static cryptocurrency website into a real-time API. By doing so, it offers users live updates on cryptocurrency prices, market capitalizations, and other essential data points. These real-time insights are invaluable for analysis, decision-making, and training machine learning models in the fast-paced world of cryptocurrency trading and investment.

## Tips for Using Scrapyrt:

1. Adapt to Website Changes:
Scrapyrt is a powerful tool for web scraping, but it has limitations. One key consideration is that it works by decoding the HTML code you define. If the target website changes its HTML structure, your API may cease to function correctly. Regularly monitor and adapt your scraping code to accommodate website updates.

2.Respect Website Policies:
Keep in mind that web scraping exists in a gray area, with policies varying from website to website. While some websites don't explicitly prohibit scraping, others have strict anti-scraping policies and may block your requests. Exercise caution and always review a website's terms of service and policies before scraping its data.

## Setup and Local Development

### To run this project locally, follow these steps:

1. Clone the repository to your local machine:

`git clone https://github.com/your-username/cryptocurrency-realtime-api.git`

2. Open project realtimescraper (back-end) folder:

`cd yourdir/cryptorealtimescraper/realtimescraper`

3. Install packages by running:

`pip install -r requirements.txt`

4. Run realtimescraper (back side) by runinng:

`scrapyrt`

Than you can see raw result by opening :

http://localhost:9080/crawl.json?start_requests=true&spider_name=cryptocurrecnydata


5. Run Flask application:
   
`python app.py`

Then you can see decoded json result by opening:

http://127.0.0.1:5000/rest

6. Open reactapp (front-end):
   
`cd yourdir/cryptorealtimescraper/reactapp`

7. Install packages by running:

`npm install -g node-modules`

8. Run reactapp (front side) by runinng:

`npm  start`

Then you can see webapp by opening:

http://localhost:3000/

### Libraries used in the project

- [Scrapy](https://scrapy.org/)
- [Flask](https://flask.palletsprojects.com/en/2.1.x/installation/)
- [flask-corse](https://flask-cors.readthedocs.io/en/latest/)
- [requests](https://pypi.org/project/requests/)
