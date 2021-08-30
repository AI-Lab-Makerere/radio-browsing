import os
from os.path import join, dirname, realpath

class Base:
    """ base config """
    # main
    SECRET_KEY = os.getenv("FLASK_APP_SECRET")

    # mail settings
    #MAIL_SERVER = "smtp.gmail.com"
    #MAIL_PORT = 465
    #MAIL_USE_TLS = False
    #MAIL_USE_SSL = True

    # gmail authentication
    #MAIL_USERNAME = os.getenv("APP_MAIL_USERNAME")
    #MAIL_PASSWORD = os.getenv("APP_MAIL_PASSWORD")


    # email
    #MAIL_DEFAULT_SENDER = os.getenv("APP_MAIL_DEFAULT_SENDER")

    #  Image File upload
    MAX_CONTENT_LENGTH = 16 * 1024 * 1024
    UPLOAD_FOLDER = join(dirname(realpath(__file__)), '../public/pictures')
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}



class Development(Base):
    """ development config """

    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_DEV_URI")

    #OAUTH_CREDENTIALS = {
    #    'facebook': {
    #        'id': '743451769785422',
    #        'secret': 'a60df688c982880194dbc9fcd969b5c8'
    #    }
    #}



class Testing(Base):
    """ test environment config """

    TESTING = True
    DEBUG = True
    # use a separate db
    # SQLALCHEMY_DATABASE_URI = "postgresql:///mobile_shop_test_db"
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_TEST_URI")


class Production(Base):
    """ production config """

    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI")


app_config = {"development": Development,
              "testing": Testing, "production": Production}
