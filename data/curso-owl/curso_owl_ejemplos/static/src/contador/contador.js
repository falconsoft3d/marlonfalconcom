import { Component, computed, proxy, signal } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class Contador extends Component {
    static template = "curso_owl_ejemplos.Contador";

    // signal: se lee llamándola y se escribe con .set()
    cuenta = signal(0);
    // computed: valor derivado, se recalcula solo cuando cambia lo que lee
    doble = computed(() => this.cuenta() * 2);
    // proxy: objeto reactivo profundo, se usa como un objeto normal
    estado = proxy({ historial: [] });

    incrementar() {
        this.cuenta.set(this.cuenta() + 1);
        this.estado.historial.push(this.cuenta());
    }
}

registry.category("actions").add("curso_owl_ejemplos.contador", Contador);
