"""
This file (test_profile.py) contains the functional tests which
test create profile and view profile.

"""
import pytest
import os
import sys
from flask import jsonify, request, json
SITE_ROOT = os.path.dirname(os.path.realpath(__file__))
PARENT_ROOT=os.path.abspath(os.path.join(SITE_ROOT, os.pardir))
GRANDPAPA_ROOT=os.path.abspath(os.path.join(PARENT_ROOT, os.pardir))
sys.path.insert(0,GRANDPAPA_ROOT)
from project import create_app
from project import mongo
from bson.objectid import ObjectId
from random import randint

@pytest.fixture
def test_client():
    flask_app = create_app()
    flask_app.config['TESTING'] = True

    with flask_app.test_client() as testing_client:
        yield testing_client

class TestSomething:

    def test_for_email(self,test_client):
        """
        GIVEN a Flask application configured for testing
        WHEN the '/createProfile' page is requested (POST)
        THEN check that request has email address
        """
        data = {
        "firstName": "Test",
        "lastName": "User",
        "position": "Developer",
        "aboutMe": "Hello World",
        "school": "Drexel",
        "degree": "MA",
        "major": "SE",
        "eduStartDate": "0001-01",
        "eduEndDate": "0001-01",
        "gpa": "3",
        "title": "Developer",
        "company": "ABC",
        "location": "PH",
        "expStartDate": "0001-01",
        "expEndDate": "0001-01"
        }
        response = test_client.post('/api/v1/createProfile/', data=json.dumps(data),headers={'Content-Type': 'application/json'})
        assert response.status_code == 403
        assert response.data == b'{"code":4,"error":"Missing request body"}\n'

    def test_checking_a_valid_email(self,test_client):
        """
        GIVEN a Flask application configured for testing
        WHEN the '/createProfile' page is requested (POST)
        THEN check email address is valid (None, Whilespaces and not following pattern)
        """

        data = {
        "email": None,
        "firstName": "Test",
        "lastName": "User",
        "position": "Developer",
        "aboutMe": "Hello World",
        "school": "Drexel",
        "degree": "MA",
        "major": "SE",
        "eduStartDate": "0001-01",
        "eduEndDate": "0001-01",
        "gpa": "3",
        "title": "Developer",
        "company": "ABC",
        "location": "PH",
        "expStartDate": "0001-01",
        "expEndDate": "0001-01"
        }
        response = test_client.post('/api/v1/createProfile/', data=json.dumps(data),headers={'Content-Type': 'application/json'})
        assert response.status_code == 403
        assert response.data == b'{"code":4,"error":"Invalid email id"}\n'

    def test_checking_a_valid_email(self,test_client):
        """
        GIVEN a Flask application configured for testing
        WHEN the '/createProfile' page is requested (POST)
        THEN check email address is valid
        """
        
        data = {
        "email":"testtest.com",
        "firstName": "Test",
        "lastName": "User",
        "position": "Developer",
        "aboutMe": "Hello World",
        "school": "Drexel",
        "degree": "MA",
        "major": "SE",
        "eduStartDate": "0001-01",
        "eduEndDate": "0001-01",
        "gpa": "3",
        "title": "Developer",
        "company": "ABC",
        "location": "PH",
        "expStartDate": "0001-01",
        "expEndDate": "0001-01"
        }
        response = test_client.post('/api/v1/createProfile/', data=json.dumps(data),headers={'Content-Type': 'application/json'})
        assert response.status_code == 403
        assert response.data == b'{"code":4,"error":"Invalid email id"}\n'


    def test_createProfile(self,test_client):
        """
        GIVEN a Flask application configured for testing
        WHEN the '/createProfile' page is requested (POST)
        THEN check that the response is valid
        """

        data = {

        "email":"test@test.com",
        "firstName": "Test",
        "lastName": "User",
        "position": "Developer",
        "aboutMe": "Hello World",
        "school": "Drexel",
        "degree": "MA",
        "major": "SE",
        "eduStartDate": "0001-01",
        "eduEndDate": "0001-01",
        "gpa": "3",
        "title": "Developer",
        "company": "ABC",
        "location": "PH",
        "expStartDate": "0001-01",
        "expEndDate": "0001-01"
        }
        response = test_client.post('/api/v1/createProfile/', data=json.dumps(data),headers={'Content-Type': 'application/json'})
        assert response.status_code == 200
        assert response != 'null'



    def test_getProfiles(self, test_client):
        """
        GIVEN a Flask application configured for testing
        WHEN the '/getProfileCount' page is requested (GET)
        THEN check that the response is valid
        """

        data = {
        "user_id":1
        }
        response = test_client.get('/api/v1/getProfiles/',data=json.dumps(data),headers={'Content-Type': 'application/json'})
        assert response.status_code == 200
        assert response != 'null'