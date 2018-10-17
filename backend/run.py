from flask import Flask, redirect, url_for, request
from db_connect import  connection
from wtforms import Form, TextField, PasswordField
import os, json

app = Flask(__name__)
default = "true"

@app.route('/')
def home():
    return 'server running'

@app.route('/register', methods= ['POST'])
def register():
    data = json.loads(request.data.decode('utf-8'))
    if request.method=='POST':
        email = data["email"]
        username = data["username"]
        password = data["password"]
        region_central = data["region_central"]
        region_east = data["region_east"]
        region_north = data["region_north"]
        region_south = data["region_south"]
        region_west = data["region_west"]
        c, conn = connection()
        user = "INSERT INTO users (email, username, password, region_central, region_east, region_north, region_south, region_west) VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')" % \
               (email, username, password, region_central, region_east, region_north, region_south, region_west)
        c.execute(user)
        print(user)
        conn.commit()
        return "True"

if __name__ == "__main__":
    app.secret_key = 'super secret key'
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host="0.0.0.0", port=port)


