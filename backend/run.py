from flask import Flask, request, session, jsonify
from db_connect import connection
import json, os
import sendgrid
from sendgrid.helpers.mail import *


app = Flask(__name__)
default = "true"

@app.route('/')
def home():
    return 'server running'

@app.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    return response

@app.route('/register', methods= ['POST'])
def register():
    data = json.loads(request.data.decode('utf-8'))
    if request.method == 'POST':
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
    print(data)
    if request.method == 'POST':
        subject_ = data['subject']
        text_ = data['text']
        region = data['region']
        c, conn = connection()
        if region == 'Central':
            c.execute("SELECT email FROM users WHERE region_central = 1")
            reg=list(c.fetchall())
        elif region == 'East':
            c.execute("SELECT email FROM users WHERE region_east = 1")
            reg=list(c.fetchall())
        elif region == 'North':
            c.execute("SELECT email FROM users WHERE region_north = 1")
            reg=list(c.fetchall())
        elif region == 'South':
            c.execute("SELECT email FROM users WHERE region_south = 1")
            reg=list(c.fetchall())
        elif region == 'West':
            c.execute("SELECT email FROM users WHERE region_west = 1")
            reg=list(c.fetchall())
        else:
            return None
        l = []
        for i in reg:
            l.append(Email(i[0]))
        print(l)
        print(subject_, text_, reg)

        sg = sendgrid.SendGridAPIClient(apikey='')
        for i in l:
            from_email = Email("f20160875@hyderabad.bits-pilani.ac.in")
            to_email = i
            subject = subject_
            content = Content("text/plain", text_)
            mail = Mail(from_email, subject, to_email, content)
            response = sg.client.mail.send.post(request_body=mail.get())
            print(response.status_code)
            print(response.body)
            print(response.headers)
            response_ = {'type': 'success', 'message': 'Mails sent successfully.'}
            return jsonify(response_), 200


    return "True"

if __name__ == "__main__":
    app.secret_key = 'super secret key'
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host="0.0.0.0", port=port)


