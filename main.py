from flask import Flask, render_template, redirect, url_for
from flask_bootstrap import Bootstrap
import os



app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ['server_key'] #  Make inv. out of this key
Bootstrap(app)



@app.route('/')
def home():
    return render_template('index.html')


#host="0.0.0.0"

#host="0.0.0.0",
if __name__ == '__main__':
    app.run( debug=False)