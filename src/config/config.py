class Config(object):
    SECRET_KEY = '\xa2\xff\xc0\x97\xeb %\x81\xa6L\xe3\x9aK\x19y\xa6(\xcf\xa2 ^ c\xe1?\x8bG'
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # La configuración de las sesiones está en el archivo app.py. Necersario por el orden de carga de los módulos
