from flask import Flask, redirect, url_for, request
from db_connect import  connection
from wtforms import Form, TextField, PasswordField
import os

app = Flask(__name__)
default = "true"

class registerationForm(Form):
    email = TextField('email')
    username=TextField('username')
    password=PasswordField('password')
    region_central= TextField('Central')
    region_east=TextField('East')
    region_north=TextField('North')
    region_south=TextField('South')
    region_west=TextField('West')

@app.route('/')
def home():
    return 'server running'

@app.route('/register', methods= ['POST'])
def register():
    # # print(request)
    # request_ = request.get_json()
    # print(request_)
    return str(request.form.to_dict())
    form=registerationForm(request.form)
    if request.method=='POST' and form.validate:
        email=form.email.data
        username=form.username.data
        password=form.password.data
        region_central=form.region_central.data
        region_east=form.region_east.data
        region_north=form.region_north.data
        region_south=form.region_south.data
        region_west=form.region_west.data
        c, conn = connection()
        user = "INSERT INTO users (email, username, password, region_central, region_east, region_north, region_south, region_west) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)" % \
               (email, username, password, region_central, region_east, region_north, region_south, region_west)
        c.execute(user)
        conn.commit()
        return True

if __name__ == "__main__":
    app.secret_key = 'super secret key'
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host="0.0.0.0", port=port)


