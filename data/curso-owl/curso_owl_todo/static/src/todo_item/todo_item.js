import { Component, t, useProps } from "@odoo/owl";

export class TodoItem extends Component {
    static template = "curso_owl_todo.TodoItem";
    props = useProps({
        todo: t.object({
            id: t.number(),
            name: t.string(),
            done: t.boolean(),
            priority: t.number(),
        }),
        onToggle: t.function(),
        onOpen: t.function(),
        onDelete: t.function(),
    });
}
