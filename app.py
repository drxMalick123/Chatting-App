from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('connect')
def handle_connect():
    print("Client connected")

@socketio.on('custom_event2')
def custom_handler(data):
    print(data['asd'])
    emit('server_event1', {'response': data['asd']}, broadcast=True)

@socketio.on('custom_event3')
def custom_handler2(data):
    print(data['asd'])
    emit('server_event', {'response': data['asd']}, broadcast=True)

    
if __name__ == '__main__':
    socketio.run(app, debug=True)
