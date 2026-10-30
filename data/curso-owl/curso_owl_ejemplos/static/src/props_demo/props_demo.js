import { Component, t, useProps } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class Saludo extends Component {
    static template = "curso_owl_ejemplos.Saludo";
    props = useProps({
        nombre: t.string(),
        veces: t.number().optional(1),
        etiquetas: t.array(t.string()).optional(() => []),
    });
}

export class PropsDemo extends Component {
    static template = "curso_owl_ejemplos.PropsDemo";
    static components = { Saludo };
}

registry.category("actions").add("curso_owl_ejemplos.props", PropsDemo);
