import { Component, signal, useListener } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class Eventos extends Component {
    static template = "curso_owl_ejemplos.Eventos";

    mensaje = signal("Sin eventos");
    tecla = signal("");

    setup() {
        // Para objetivos globales se usa useListener: se retira al destruir el componente.
        useListener(window, "keydown", (ev) => this.tecla.set(ev.key));
    }

    alPulsar(ev) {
        this.mensaje.set(`Clic en ${ev.target.tagName}`);
    }

    saludar(nombre) {
        this.mensaje.set(`Hola, ${nombre}`);
    }
}

registry.category("actions").add("curso_owl_ejemplos.eventos", Eventos);
