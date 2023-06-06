from flask import Blueprint

from controllers.TitulacionController import *
from decorators import token_required

titulacion_bp = Blueprint('titulacion_bp', __name__)


# Index
@titulacion_bp.route('/', methods=['GET'])
@token_required
def index_route():
    return index()


# Creación
@titulacion_bp.route('/nuevo/', methods=['GET', 'POST'])
@token_required
def add_route():
    return add()


# Edición
@titulacion_bp.route('/<int:id_titulacion>/', methods=['GET', 'POST'])
@token_required
def update_route(id_titulacion):
    return update(id_titulacion)


# Eliminación
@titulacion_bp.route('/eliminar/<int:id_titulacion>/', methods=['GET'])
@token_required
def delete_route(id_titulacion):
    return delete(id_titulacion)


# Ajax get titulaciones
@titulacion_bp.route('/ajax/get_titulaciones', methods=['GET'])
@token_required
def get_titulaciones_ajax_route():
    return get_titulaciones_ajax()


# View
@titulacion_bp.route('/titulacion/<int:id_titulacion>/', methods=['GET'])
@token_required
def view_route(id_titulacion):
    return view(id_titulacion)
