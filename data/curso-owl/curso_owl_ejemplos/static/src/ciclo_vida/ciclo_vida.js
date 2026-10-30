import {
    Component,
    onError,
    onMounted,
    onPatched,
    onWillDestroy,
    onWillPatch,
    onWillStart,
    onWillUnmount,
    signal,
} from "@odoo/owl";
import { registry } from "@web/core/registry";

export class CicloVida extends Component {
    static template = "curso_owl_ejemplos.CicloVida";

    clics = signal(0);
    raiz = signal.ref();

    setup() {
        onWillStart(async () => {
            // Se espera antes del primer render: aquí se cargan los datos.
            this.dato = await Promise.resolve("cargado");
        });
        onMounted(() => console.log("onMounted", this.raiz()));
        onWillPatch(() => console.log("onWillPatch"));
        onPatched(() => console.log("onPatched", this.clics()));
        onWillUnmount(() => console.log("onWillUnmount"));
        onWillDestroy(() => console.log("onWillDestroy"));
        onError((error) => console.error("onError", error));
    }
}

registry.category("actions").add("curso_owl_ejemplos.ciclo_vida", CicloVida);
