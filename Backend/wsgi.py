# wsgi.py
# Entry point for running the CareBridge Flask application.

from api.app import app

if __name__ == "__main__":
    with app.app_context():
        app.run()
