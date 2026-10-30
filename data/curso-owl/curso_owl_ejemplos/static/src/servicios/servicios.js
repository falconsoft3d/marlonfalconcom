import { Component, signal, usePlugin } from "@odoo/owl";
import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog";
import { _t } from "@web/core/l10n/translation";
import { rpc } from "@web/core/network/rpc";
import { ORM } from "@web/core/orm_plugin";
import { registry } from "@web/core/registry";
import { user } from "@web/core/user";
import { useService } from "@web/core/utils/hooks";

export class Servicios extends Component {
    static template = "curso_owl_ejemplos.Servicios";

    // Forma nueva: importar la clase del plugin.
    orm = usePlugin(ORM);
    version = signal("");

    setup() {
        // Forma puente: useService sigue funcionando con estos nombres.
        this.action = useService("action");
        this.dialog = useService("dialog");
        this.notification = useService("notification");
        this.nombreUsuario = user.name;
    }

    async contarUsuarios() {
        const total = await this.orm.searchCount("res.users", []);
        this.notification.add(_t("Usuarios: %(total)s", { total }), { type: "info" });
    }

    async cargarVersion() {
        const info = await rpc("/web/webclient/version_info");
        this.version.set(info.server_version);
    }

    abrirUsuarios() {
        return this.action.doAction({
            type: "ir.actions.act_window",
            res_model: "res.users",
            views: [[false, "list"]],
        });
    }

    confirmar() {
        this.dialog.add(ConfirmationDialog, {
            title: _t("Confirmar"),
            body: _t("¿Mostrar una notificación?"),
            confirm: () => this.notification.add(_t("Confirmado"), { type: "success" }),
            cancel: () => {},
        });
    }
}

registry.category("actions").add("curso_owl_ejemplos.servicios", Servicios);
