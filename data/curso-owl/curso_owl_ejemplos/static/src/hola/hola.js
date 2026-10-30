import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class Hola extends Component {
    static template = "curso_owl_ejemplos.Hola";

    nombre = "Odoo 20";
}

registry.category("actions").add("curso_owl_ejemplos.hola", Hola);
