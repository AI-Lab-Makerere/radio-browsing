from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from app.models import db
from server import app

# import models
#from app.helpers.roles import create_superuser, create_default_roles


# register app and db with migration class
migrate = Migrate(app, db)
manager = Manager(app)

manager.add_command('db', MigrateCommand)
"""
# create defaultscommand
# $ create_defaults
@manager.command
def create_defaults():
    create_default_roles()
"""

"""
# command for creating admin user
# $ admin_user -e <admin_email> -p <admin_password> -c <confirm_password>
@manager.option('-e', '--email', dest='email')
@manager.option('-n', '--name', dest='name')
@manager.option('-p', '--password', dest='password')
@manager.option('-c', '--confirm_password', dest='confirm_password')
def admin_user(email, name, password, confirm_password):
    create_superuser(email, name, password, confirm_password)
"""

if __name__ == '__main__':
    manager.run()
