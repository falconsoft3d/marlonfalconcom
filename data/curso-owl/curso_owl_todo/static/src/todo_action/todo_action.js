import { Component, computed, onWillStart, signal, usePlugin, useProps } from "@odoo/owl";
import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog";
import { _t } from "@web/core/l10n/translation";
import { registry } from "@web/core/registry";
import { useAutofocus, useService } from "@web/core/utils/hooks";
import { standardActionServiceProps } from "@web/webclient/actions/action_plugin";
import { StatCard } from "../stat_card/stat_card";
import { TodoItem } from "../todo_item/todo_item";
import { TodoPlugin } from "../todo_plugin";

export class TodoAction extends Component {
    static template = "curso_owl_todo.TodoAction";
    static components = { StatCard, TodoItem };

    props = useProps(standardActionServiceProps);
    todoStore = usePlugin(TodoPlugin);

    newTodoName = signal("");
    filter = signal("all");
    inputRef = signal.ref();

    visibleTodos = computed(() => {
        const todos = this.todoStore.todos();
        switch (this.filter()) {
            case "pending":
                return todos.filter((todo) => !todo.done);
            case "done":
                return todos.filter((todo) => todo.done);
            default:
                return todos;
        }
    });

    setup() {
        this.action = useService("action");
        this.dialog = useService("dialog");
        this.notification = useService("notification");
        useAutofocus({ ref: this.inputRef });
        onWillStart(() => this.todoStore.load());
    }

    async addTodo() {
        const name = this.newTodoName().trim();
        if (!name) {
            this.notification.add(_t("Escribe un nombre para la tarea."), { type: "warning" });
            return;
        }
        await this.todoStore.add(name);
        this.newTodoName.set("");
        this.notification.add(_t("Tarea creada."), { type: "success" });
    }

    onInputKeydown(ev) {
        if (ev.key === "Enter") {
            this.addTodo();
        }
    }

    toggleTodo(todo) {
        return this.todoStore.toggle(todo);
    }

    openTodo(todo) {
        return this.action.doAction({
            type: "ir.actions.act_window",
            res_model: "curso.todo",
            res_id: todo.id,
            views: [[false, "form"]],
        });
    }

    deleteTodo(todo) {
        this.dialog.add(ConfirmationDialog, {
            title: _t("Eliminar tarea"),
            body: _t("Esta acción no se puede deshacer."),
            confirmLabel: _t("Eliminar"),
            confirm: () => this.todoStore.remove(todo),
            cancel: () => {},
        });
    }
}

registry.category("actions").add("curso_owl_todo.todo_action", TodoAction);
