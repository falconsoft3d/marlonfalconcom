from odoo import fields, models


class CursoTodo(models.Model):
    _name = 'curso.todo'
    _description = 'Tarea del curso OWL'
    _order = 'done, priority desc, id desc'

    name = fields.Char(string='Tarea', required=True)
    done = fields.Boolean(string='Hecha', default=False)
    priority = fields.Integer(string='Prioridad', default=0)
