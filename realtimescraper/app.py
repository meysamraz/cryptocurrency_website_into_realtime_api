from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
app.config["CACHE_TYPE"] = "null"
CORS(app)


@app.route('/')
def hello():
    return 'Hello to you';


@app.route('/rest')
def scrape():
    """
    this funciton return decoded json data from scrapyrt crawl
    """
    response1 = requests.get('http://localhost:9080/crawl.json?start_requests=true&spider_name=cryptocurrecnydata')
    lst1 =  response1.json()['items']
    lst1.extend(lst1)
    return jsonify(lst1)


if __name__ == '__main__':
    app.run()
