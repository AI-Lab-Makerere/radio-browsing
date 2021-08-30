import os
import json
from os.path import join, dirname
from dotenv import load_dotenv
from flask import Flask, jsonify
from flasgger import Swagger
from flask_cors import CORS
from flask_jwt_extended import JWTManager

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path, override="true")

from app.models import db
from app.routes import api

#db = SQLAlchemy()

def create_app(config_name):
    """ app factory """

    # import config options
    from config.config import app_config

    app = Flask(__name__)

    # allow cross-domain requests
    CORS(app)

    # use running config settings on app
    app.config.from_object(app_config[config_name])
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # register app with the db
    db.init_app(app)

    # initialize api resources
    api.init_app(app)

    # initialize jwt with app
    jwt = JWTManager(app)

    # swagger
    app.config['SWAGGER'] = {
        'title': 'NLP Audio Search Engine API',
        'uiversion': 2
    }

    Swagger(app, template_file='api_docs.json')

    """
    from api.Blog.blog_routes import blogs
    app.register_blueprint(blogs)

    from api.User.user_model import User

    from api.Login.login_route import login
    app.register_blueprint(login)

    from api.Tag.tag_model import Tag
    


    @click.command(name='create_admin')
    @with_appcontext
    def create_admin():
        admin=User(email="owenkg1@outlook.com",password="adminpassword")
        admin.password = generate_password_hash(admin.password,'sha256',salt_length=12)
        db.session.add(admin)
        db.session.commit()

    app.cli.add_command(create_admin)
    """


    return app

app = create_app(os.getenv('FLASK_ENV'))

if __name__ == '__main__':
    app.run()
