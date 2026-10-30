import { Component, t, useProps } from "@odoo/owl";
import { _t } from "@web/core/l10n/translation";
import { registry } from "@web/core/registry";
import { standardFieldProps } from "@web/views/fields/standard_field_props";

export class TodoStarsField extends Component {
    static template = "curso_owl_todo.TodoStarsField";
    props = useProps({
        ...standardFieldProps,
        maxStars: t.number().optional(3),
    });

    get value() {
        return this.props.record.data[this.props.name] || 0;
    }

    get stars() {
        return Array.from({ length: this.props.maxStars }, (_, index) => index + 1);
    }

    onStarClick(star) {
        const value = star === this.value ? 0 : star;
        return this.props.record.update({ [this.props.name]: value });
    }
}

export const todoStarsField = {
    component: TodoStarsField,
    displayName: _t("Estrellas de tarea"),
    supportedTypes: ["integer"],
    supportedOptions: [
        {
            label: _t("Máximo de estrellas"),
            name: "max_stars",
            type: "number",
        },
    ],
    extractProps({ options }) {
        return { maxStars: options.max_stars };
    },
};

registry.category("fields").add("curso_stars", todoStarsField);
