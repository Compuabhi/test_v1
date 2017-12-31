from flask import render_template
from flask import request

from app import app

@app.route('/')
def index():
	return render_template('index.html',to_name='Whom To Send', from_name='Your Name',fest_msg='Happy New Year',flag='home')

@app.route('/about')
def about():
	return render_template('about.html')


@app.route('/xmas')
def xmas():
	if 't' in request.args and 'f' in request.args:
		return render_template('xmas.html',to_name=request.args['t'], from_name=request.args['f'],fest_msg='Merry Christmas',flag='not_home')
	else:
		return render_template('xmas.html',to_name='Whom To Send', from_name='Your Name',fest_msg='Merry Christmas',flag='home')

@app.route('/hny')
def hny():
	if 't' in request.args and 'f' in request.args:
		return render_template('newyear.html',to_name=request.args['t'], from_name=request.args['f'],fest_msg='Happy New Year',flag='not_home')
	else:
		return render_template('newyear.html',to_name='Whom To Send', from_name='Your Name',fest_msg='Happy New Year',flag='home')


