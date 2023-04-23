from flask import render_template, redirect, url_for, abort

from forms import FormCentro
from models.Centro import Centro


def index():
    centros = Centro.get_all_json()
    return render_template('centros/index.html', centros=centros)


def add():
    formulario = FormCentro()
    if formulario.validate_on_submit():
        nombre = formulario.nombre.data
        abreviatura = formulario.abreviatura.data
        email = formulario.email.data

        centro = Centro(nombre=nombre, abreviatura=abreviatura, email=email)
        centro.save()
        return index()
    return render_template('centros/form.html', form=formulario)


def update(id_centro):
    centro = Centro.get_centro(id_centro)
    if centro is None:
        abort(404)
    formulario = FormCentro(obj=centro)
    formulario.submit.label.text = 'Modificar'
    if formulario.validate_on_submit():
        centro.nombre = formulario.nombre.data
        centro.abreviatura = formulario.abreviatura.data
        centro.email = formulario.email.data
        centro.save()
        return redirect(url_for('centro_bp.index'))
    return render_template('centros/form.html', form=formulario)


def delete(id_centro):
    centro = Centro.get_centro(id_centro)
    if centro is None:
        abort(404)
    centro.delete()
    return redirect(url_for('centro_bp.index'))
