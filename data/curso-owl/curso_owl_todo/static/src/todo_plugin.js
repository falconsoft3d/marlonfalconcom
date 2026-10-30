import { computed, Plugin, signal, usePlugin } from "@odoo/owl";
import { ORM } from "@web/core/orm_plugin";
import { services } from "@web/core/services";

const MODEL = "curso.todo";
const FIELDS = ["name", "done", "priority"];

/**
 * Estado compartido entre la client action y el systray.
 * Cada escritura vuelve a leer del servidor: el servidor es la fuente de verdad.
 */
export class TodoPlugin extends Plugin {
    orm = usePlugin(ORM);

    todos = signal([]);
    pendingCount = computed(() => this.todos().filter((todo) => !todo.done).length);
    doneCount = computed(() => this.todos().length - this.pendingCount());

    async load() {
        this.todos.set(await this.orm.searchRead(MODEL, [], FIELDS));
    }

    async add(name) {
        await this.orm.create(MODEL, [{ name }]);
        await this.load();
    }

    async toggle(todo) {
        await this.orm.write(MODEL, [todo.id], { done: !todo.done });
        await this.load();
    }

    async remove(todo) {
        await this.orm.unlink(MODEL, [todo.id]);
        await this.load();
    }
}

services.add(TodoPlugin);
