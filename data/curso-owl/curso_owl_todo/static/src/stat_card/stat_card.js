import { Component, t, useProps } from "@odoo/owl";

export class StatCard extends Component {
    static template = "curso_owl_todo.StatCard";
    props = useProps({ title: t.string() });
}
