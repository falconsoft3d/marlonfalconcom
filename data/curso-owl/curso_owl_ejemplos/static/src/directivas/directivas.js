import { Component, signal, t, useProps } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class Caja extends Component {
    static template = "curso_owl_ejemplos.Caja";
    props = useProps({ titulo: t.string() });
}

export class Directivas extends Component {
    static template = "curso_owl_ejemplos.Directivas";
    static components = { Caja };

    colores = signal([
        { id: 1, nombre: "rojo" },
        { id: 2, nombre: "verde" },
        { id: 3, nombre: "azul" },
    ]);
    texto = signal("");
    activo = signal(false);
    color = signal("rojo");
    entrada = signal.ref();

    enfocar() {
        this.entrada()?.focus();
    }
}

registry.category("actions").add("curso_owl_ejemplos.directivas", Directivas);
