"""command line utility to create an admin account"""
import re
from app.models.role import Role
from app.models.user import User


def has_role(role_list, role_name):
    for role in role_list:
        if role['name'] == role_name:
            return True
    return False


def create_superuser(email,name, password, confirm_password):

    email_pattern = re.compile(r"\"?([-a-zA-Z0-9.`?{}]+@\w+\.\w+)\"?")

    # check passwords match
    if password != confirm_password:
        print("Passwords do not match")
        return

    # check email is of valid format
    if not re.match(email_pattern, email):
        print("Wrong email format")
        return

    # check administrator role exists
    admin_role = Role.find_first(**{'name': 'administrator'})

    if not admin_role:
        try:
            admin_role = Role(name='administrator') 
            admin_role.save()
        except Exception as e:
            print(str(e))
            return

    # create admin user
    try:
        admin_user = User.find_first(**{'email': email})
        if admin_user:
            print(f'email {email} already in use')
            return

        admin_user = User(
            email=email, password=password)
        admin_user.verified = True
        admin_user.roles.append(admin_role)
        admin_user.save()
        print("Admin user created successfully")
        print('password: ', password)
        return
    except Exception as e:
        print(str(e))
        return


def create_default_roles():
    admin = 'administrator'
    user = 'nonadmin'

    # create admin role
    admin_role = Role.find_first(name=admin)

    if not admin_role:
        try:
            admin_role = Role(name=admin)
            admin_role.save()
            print('Admin Created successfully')
        except Exception as e:
            print(str(e))
            return
    # create user role
    user_role = Role.find_first(name=user)

    if not user_role:
        try:
            user_role = Role(name=user)
            user_role.save()
            print('NonAdmin Created successfully')
        except Exception as e:
            print(str(e))
            return


def is_owner_or_admin(resource, user_id, user_roles):
    is_admin = has_role(user_roles, 'administrator')
    if resource.owner.id:
        is_owner = str(resource.owner.id) == str(user_id)
    else:
        is_owner = False

    return is_admin or is_owner
