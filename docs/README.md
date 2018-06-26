#Heroku Help
// Assumes you have already set up git repo for your project
// https://virtualenv.pypa.io/en/stable/#
// 
> pip install virtualenv
> source venv/bin/activate

// Install gunicorn so you can run flask app locally
> pip install Flask gunicorn

// Check if app.py works
> gunicorn app:app

// Get req for this app and puts in file
> pip freeze > requirements.txt

// Make procfile
> echo "web: gunicorn app:app --log-file -" > Procfile

// create heroku application
> heroku create cafe-001

// deploy
> git push heroku master

// Look at logs


> heroku releases

// Set environment variable so you don't upload keys, etc
> heroku config:set KKEY=1234


