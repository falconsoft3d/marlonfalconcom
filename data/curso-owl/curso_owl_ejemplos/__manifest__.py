{
    'name': 'Curso OWL: ejemplos',
    'version': '1.0',
    'category': 'Tutorials',
    'summary': 'Ejemplos cortos de OWL 3 en Odoo 20',
    'author': 'Curso OWL',
    'license': 'LGPL-3',
    'depends': ['web'],
    'data': [
        'views/ejemplos_menu.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'curso_owl_ejemplos/static/src/**/*',
        ],
    },
    'application': True,
    'installable': True,
}
