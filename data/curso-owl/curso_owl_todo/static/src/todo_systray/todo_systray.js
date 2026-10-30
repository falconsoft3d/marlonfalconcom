import { Component, onMounted, usePlugin } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { TodoPlugin } from "../todo_plugin";

export class TodoSystray extends Component {
    static template = "curso_owl_todo.TodoSystray";

    todoStore = usePlugin(TodoPlugin);

    setup() {
        this.action = useService("action");
        // onMounted y no onWillStart: no retrasamos el render de la barra superior.
        onMounted(() => this.todoStore.load());
    }

    openTodos() {
        return this.action.doAction("curso_owl_todo.todo_action");
    }
}

export const todoSystrayItem = {
    Component: TodoSystray,
};

registry.category("systray").add("curso_owl_todo.todo_systray", todoSystrayItem, { sequence: 50 });
