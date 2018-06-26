#Heroku Help
// Assumes you have already set up git repo for your project
// and 
> pip install virtualenv
> source venv/bin/activate

// Install gunicorn so you can run flask app locally
> pip install Flask gunicorn

// Make procfile
> echo "web: gunicorn app:app --log-file -" > Procfile

// create heroku application
> heroku create cafe-001

// deploy
> git push heroku master


