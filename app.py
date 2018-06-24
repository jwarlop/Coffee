import os
from flask import Flask

app = Flask(__name__)

@app.route('/')
def coffee():
  return '<h1>Hello coffee team members: Kevin, Gary, Dutch and John</h1>'

