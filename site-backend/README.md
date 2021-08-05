# NLP Demo Audio Search Api
With simple CRUD implementations

### Project Setup

Follow these steps to have a local running copy of the app.

##### Clone The Repo

`git clone https://github.com/AI-Lab-Makerere/radio-browsing.git`

If `master` is not up to date, `git checkout ft-backend`. However, note that code on develop could be having some minor issues to sort.

##### Install PostgreSQL

Here's a great resource to check out:

[How To Install and Use PostgreSQL](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)

Create a development database and call it `audio_db`.

##### Create a Virtual Environment

create virtual enviroment called venv

Run `virtualenv venv`

##### Activate the virtual environment.

Run `. venv/bin/activate`

App was developed with `Python 3.8.0`.

Make sure you have `pip` installed on your machine.

##### Install the dependencies.

`pip install -r requirements.txt`

##### Create a .env file
Create a `.env` file (which defines the environment variables used) at the root of the app.

Add the following details, customizing as needed.