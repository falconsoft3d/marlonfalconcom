import { Component, signal, t, useProps } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class Hijo extends Component {
    static template = "curso_owl_ejemplos.Hijo";
    props = useProps({
        valor: t.number(),
        onSumar: t.function(),
        // Una signal como prop: el hijo la lee sin que el padre se vuelva a renderizar.
        total: t.signal(t.number()),
    });
}

export class Comunicacion extends Component {
    static template = "curso_owl_ejemplos.Comunicacion";
    static components = { Hijo };

    a = signal(1);
    total = signal(1);

    sumar(cantidad) {
        this.a.set(this.a() + cantidad);
        this.total.set(this.total() + cantidad);
    }
}

registry.category("actions").add("curso_owl_ejemplos.comunicacion", Comunicacion);
