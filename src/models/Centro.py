from dataclasses import dataclass

from utils.db import db


class Centro(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    codigo = db.Column(db.Integer, nullable=False)
    nombre = db.Column(db.String(256), nullable=False)
    abreviatura = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(256), nullable=False)
    titulaciones = db.relationship("Titulacion", back_populates="centro")

    @staticmethod
    def get_all_json():
        centros = Centro.query.all()
        return [c.to_dict() for c in centros]

    def to_dict(self):
        return {
            "id": self.id,
            "codigo": self.codigo,
            "nombre": self.nombre,
            "abreviatura": self.abreviatura,
            "email": self.email
        }

    @staticmethod
    def get_centro(id_centro):
        return Centro.query.get(id_centro)

    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    @staticmethod
    def get_all():
        return Centro.query.all()

    def get_titulaciones(self):
        return [t.to_dict() for t in self.titulaciones]
