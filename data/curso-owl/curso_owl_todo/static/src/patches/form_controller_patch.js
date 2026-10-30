import { _t } from "@web/core/l10n/translation";
import { useService } from "@web/core/utils/hooks";
import { patch } from "@web/core/utils/patch";
import { FormController } from "@web/views/form/form_controller";

patch(FormController.prototype, {
    setup() {
        super.setup(...arguments);
        // Nombre propio para no pisar atributos del componente original.
        this.cursoNotification = useService("notification");
    },

    async onRecordSaved(record, changes) {
        const result = await super.onRecordSaved(...arguments);
        if (record.resModel === "curso.todo") {
            this.cursoNotification.add(_t("Tarea guardada."), { type: "success" });
        }
        return result;
    },
});
