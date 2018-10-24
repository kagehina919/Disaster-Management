from flask import Flask, redirect, url_for, request, session, jsonify
from db_connect import connection
import json, os
from flask_sendgrid import SendGrid


app = Flask(__name__)
default = "true"
app.config['SENDGRID_API_KEY'] = 'your api key'
app.config['SENDGRID_DEFAULT_FROM'] = 'admin@yourdomain.com'
mail = SendGrid(app)

# send multiple recipients; list of emails as sendgrid.mail.helpers.Email object
mail.send_email(
    from_email='someone@yourdomain.com',
    to_email=[Email('test1@example.com'), Email('test2@example.com')],
    subject='Subject',
    text='Body',
)

@app.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    return response

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
        username_form = data['username']
        password_form = data['password']
        c, conn = connection()
        c.execute("SELECT password FROM users WHERE username = ('%s')" % username_form)
        passw = c.fetchone()
        if passw is None:
            response = {'type':'failure', 'message': 'Username not found.'}
        elif password_form == passw[0]:
            session['logged_in'] = True
            session['username'] = data['username']
            response = {'type': 'success', 'message': 'Logged in as ' + session['username']}
        else:
            response = {'type':'failure', 'message': 'Wrong Credentials!'}
        return jsonify(response), 200
    return None

@app.route('/admin', methods=['POST'])
def admin():
    data = json.loads(request.data.decode('utf-8'))
    if request.method == 'POST':
        text_form= data['text']
        region_form= data['region']
        c, conn = connection()
        if region_form == 'Central':
            reg=c.execute("SELECT email FROM users WHERE region_central = 1" )
            return reg
        elif  region_form == 'East':
            reg = c.execute("SELECT email FROM users WHERE region_east = 1")
            return reg
        elif  region_form == 'North':
            reg = c.execute("SELECT email FROM users WHERE region_north = 1")
            return reg
        elif  region_form == 'South':
            reg = c.execute("SELECT email FROM users WHERE region_south = 1")
            return reg
        elif region_form == 'West':
            reg = c.execute("SELECT email FROM users WHERE region_west = 1")
            return reg
        else:
            print('choose region')


if __name__ == "__main__":
    app.secret_key = 'super secret key'
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host="0.0.0.0", port=port)


