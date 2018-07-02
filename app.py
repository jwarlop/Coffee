import os
import logging
from flask import Flask,render_template,url_for,json,jsonify


cwd = os.getcwd()
spath = cwd+'/static'
app = Flask(__name__,static_url_path=spath,static_folder="static") 
logging.basicConfig(level=logging.DEBUG)

@app.route('/')
@app.route('/<name>')
def coffee(name=None):
  logging.debug("main route")
  return render_template('index.html')

@app.route('/analyze')
def analyze(name=None):
  return render_template('analyze.html')


@app.route('/api/restate')
def restate(name=None):
  SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
  json_url = os.path.join(SITE_ROOT, "static/data", "restate.json")
  data = json.load(open(json_url))
  return jsonify(data)
  

@app.route('/api/cshops')
def cshops(name=None):
  #Get path to project directory
  SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
  json_url = os.path.join(SITE_ROOT, "static/data", "cshops.json")
  data = json.load(open(json_url))
  return jsonify(data)


@app.route('/mapit')
def mapit(name=None):
  return render_template('mapit.html')


