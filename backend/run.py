from flask import Flask, redirect, url_for, request, session
from db_connect import  connection
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
        region = data["region"]
        if region == 'Central':
            region_central, region_east, region_north, region_south, region_west = 1, 0, 0, 0, 0
        elif region == 'East':
            region_central, region_east, region_north, region_south, region_west = 0, 1, 0, 0, 0
        elif region == 'North':
            region_central, region_east, region_north, region_south, region_west = 0, 0, 1, 0, 0
        elif region=='South':
            region_central, region_east, region_north, region_south, region_west = 0, 0, 0, 1, 0
        else:
            region_central, region_east, region_north, region_south, region_west = 0, 0, 0, 0, 1
        c, conn = connection()
        user = "INSERT INTO users (email, username, password, region_central, region_east, region_north, region_south, region_west) VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')" % \
               (email, username, password, region_central, region_east, region_north, region_south, region_west)
        c.execute(user)
        print(user)
        conn.commit()
        return "True"

@app.route('/login', methods=['POST'])
def login():
    data = json.loads(request.data.decode('utf-8'))
    if request.method == 'POST':
        username_form = data["username"]
        password_form = data["password"]
        c, conn = connection()
        c.execute("SELECT password FROM users WHERE username = ('%s')" % username_form)
        passw = c.fetchone()
        print(passw[0])
        print(password_form)
        if password_form == passw[0]:
            session['logged_in'] = True
            session['username'] = data['username']
            return ('logged in as ' + session['username'])
        return "False"


if __name__ == "__main__":
    app.secret_key = 'super secret key'
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host="0.0.0.0", port=port)


