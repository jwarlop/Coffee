import os
from flask import Flask,render_template,url_for

cwd = os.getcwd()
spath = cwd+'/static'
app = Flask(__name__,static_url_path=spath,static_folder="static") 

@app.route('/')
@app.route('/<name>')
def coffee(name=None):
  return render_template('index.html')

@app.route('/analyze')
def analyze(name=None):
  return render_template('analyze.html')
  

