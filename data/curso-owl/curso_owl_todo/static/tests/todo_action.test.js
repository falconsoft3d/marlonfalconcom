import { expect, test } from "@odoo/hoot";
import { waitFor } from "@odoo/hoot-dom";
import {
    contains,
    defineModels,
    fields,
    models,
    mountWithCleanup,
} from "@web/../tests/web_test_helpers";
import { TodoAction } from "@curso_owl_todo/todo_action/todo_action";

class CursoTodo extends models.Model {
    _name = "curso.todo";

    name = fields.Char();
    done = fields.Boolean({ default: false });
    priority = fields.Integer({ default: 0 });

    _records = [
        { id: 1, name: "Leer las notas", done: false, priority: 1 },
        { id: 2, name: "Hacer el ejercicio", done: true, priority: 0 },
    ];
}

defineModels([CursoTodo]);

test("muestra las tareas del servidor", async () => {
    await mountWithCleanup(TodoAction, { props: { action: {} } });

    expect(".o_curso_todo_item").toHaveCount(2);
});

test("filtra las tareas pendientes", async () => {
    await mountWithCleanup(TodoAction, { props: { action: {} } });

    await contains(".o_curso_todo_filter").select("pending");

    expect(".o_curso_todo_item").toHaveCount(1);
});

test("añade una tarea con el botón", async () => {
    await mountWithCleanup(TodoAction, { props: { action: {} } });

    // confirm: false evita que edit() pulse Enter, que ya crearía la tarea.
    await contains(".o_curso_todo_input").edit("Nueva tarea", { confirm: false });
    await contains(".o_curso_todo_add").click();
    await waitFor(".o_curso_todo_item:contains(Nueva tarea)");

    expect(".o_curso_todo_item").toHaveCount(3);
});

test("añade una tarea con Enter", async () => {
    await mountWithCleanup(TodoAction, { props: { action: {} } });

    await contains(".o_curso_todo_input").edit("Con Enter");
    await waitFor(".o_curso_todo_item:contains(Con Enter)");

    expect(".o_curso_todo_item").toHaveCount(3);
});
