{
    'name': 'Curso OWL: lista de tareas',
    'version': '1.0',
    'category': 'Tutorials',
    'summary': 'Módulo de ejemplo para aprender OWL 3 en Odoo 20',
    'author': 'Curso OWL',
    'license': 'LGPL-3',
    'depends': ['web'],
    'data': [
        'security/ir.access.csv',
        'views/curso_todo_views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'curso_owl_todo/static/src/**/*',
        ],
        'web.assets_unit_tests': [
            'curso_owl_todo/static/tests/**/*',
        ],
    },
    'application': True,
    'installable': True,
}
