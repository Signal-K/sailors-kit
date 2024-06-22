from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime  # Add this line
from os import environ

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL')
db = SQLAlchemy(app)

# Database models/tables
class Anomaly(db.Model):
    __tablename__ = 'anomalies'

    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    content = db.Column(db.Text, nullable=True)
    ticId = db.Column(db.Text, nullable=True)
    anomalytype = db.Column(db.Text, nullable=True)
    type = db.Column(db.Text, nullable=True)
    radius = db.Column(db.Float, nullable=True)
    mass = db.Column(db.Float, nullable=True)
    density = db.Column(db.Float, nullable=True)
    gravity = db.Column(db.Float, nullable=True)
    temperatureEq = db.Column(db.Float, nullable=True)
    temperature = db.Column(db.Float, nullable=True)
    smaxis = db.Column(db.Float, nullable=True)
    orbital_period = db.Column(db.Float, nullable=True)
    classification_status = db.Column(db.Text, nullable=True)
    avatar_url = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.TIMESTAMP(timezone=True), nullable=False, default=datetime.utcnow)
    deepnote = db.Column(db.Text, nullable=True)
    lightkurve = db.Column(db.Text, nullable=True)
    configuration = db.Column(JSONB, nullable=True)

    def __repr__(self):
        return f'<Anomaly {self.id}>'

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def json(self):
        return jsonify(self.as_dict())

# Create all tables
db.create_all()

# API Routes
@app.route('/test', methods=["GET"])
def test():
    return jsonify({"message": "Hello World"}), 200

# Create a planet/anomaly
@app.route('/anomalies/create', methods=["POST"])
def create_planet():
    try:
        data = request.get_json()
        new_anomaly = Anomaly(
            content=data['content'],
            ticId=data['ticId'],
            anomalytype=data['anomalytype'],
            type=data['type'],
            radius=data['radius'],
            mass=data['mass'],
            density=data['density'],
            gravity=data['gravity'],
            temperatureEq=data['temperatureEq'],
            temperature=data['temperature'],
            smaxis=data['smaxis'],
            orbital_period=data['orbital_period'],
            classification_status=data['classification_status'],
            avatar_url=data['avatar_url'],
            deepnote=data['deepnote'],
            lightkurve=data['lightkurve'],
            configuration=data['configuration']
        )
        
        db.session.add(new_anomaly)
        db.session.commit()
        return jsonify({"message": "Anomaly created successfully"}), 201
    except Exception as e:
        return jsonify({"message": str(e)}), 500

# Fetch all anomalies
@app.route('/anomalies', methods=["GET"])
def get_anomalies():
    try:
        anomalies = Anomaly.query.all()
        return jsonify([a.as_dict() for a in anomalies]), 200
    except e:
        return jsonify({"message": str(e)}), 500

# Fetch an anomaly by id
@app.route('/anomalies/<id>', methods=["GET"])
def get_anomaly(id):
    try:
        anomaly = Anomaly.query.filter_by(id=id).first()
        return jsonify(anomaly.as_dict()), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500

# Update an existing anomaly
@app.route('/anomalies/update/<id>', methods=["PUT"])
def update_anomaly(id):
    try:
        anomaly = Anomaly.query.filter_by(id=id).first()
        data = request.get_json()
        anomaly.content = data['content']
        anomaly.ticId = data['ticId']
        anomaly.anomalytype = data['anomalytype']
        anomaly.type = data['type']
        anomaly.radius = data['radius']
        anomaly.mass = data['mass']
        anomaly.density = data['density']
        anomaly.gravity = data['gravity']
        anomaly.temperatureEq = data['temperatureEq']
        anomaly.temperature = data['temperature']
        anomaly.smaxis = data['smaxis']
        anomaly.orbital_period = data['orbital_period']
        anomaly.classification_status = data['classification_status']
        anomaly.avatar_url = data['avatar_url']
        anomaly.deepnote = data['deepnote']
        anomaly.lightkurve = data['lightkurve']
        anomaly.configuration = data['configuration']
        db.session.commit()
        return jsonify({"message": "Anomaly updated successfully"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
