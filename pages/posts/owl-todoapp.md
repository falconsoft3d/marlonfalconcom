---
title: TodoApp con Owl
date: 2022/12/21
description: Ejemplo de una aplicación de tareas (TodoApp) con Owl usando componentes, un store reactivo, useRef, onMounted y useEnv.
tag: owl
author: Marlon Falcon Hernandez
---
#  TodoApp con Owl

Este es un ejemplo de una aplicación de tareas (TodoApp) con Owl. Es un paso más respecto a los ejemplos de hola mundo y contador, ya que introduce conceptos como el estado compartido entre componentes y las referencias a elementos del DOM.

Puedes ver el ejemplo funcionando aquí:

[03-todoapp](/owl-samples/03-todoapp/index.html)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Agregar componente</title>
    <script src="https://marlonfalcon.com/lib/owl.js"></script>
  </head>
  <body>
    <h1>Todo App</h1>
    <script>
        // const { Component, xml, useState, mount } = owl;
        const { Component, mount, xml, useRef, onMounted, useState, reactive, useEnv } = owl;

        // Mostrem la versió de Owl
        (function () {
            console.log("hello owl", owl.__info__.version);
          })();


        // Agregamos un componente
        class Root1 extends Component {
            static template = xml`<div>todo app</div>`;
        }
        mount(Root1, document.body);

        

// -------------------------------------------------------------------------
// Store
// -------------------------------------------------------------------------
function useStore() {
  const env = useEnv();
  return useState(env.store);
}

// -------------------------------------------------------------------------
// TaskList
// -------------------------------------------------------------------------
class TaskList {
  nextId = 1;
  tasks = [];

  addTask(text) {
    text = text.trim();
    if (text) {
      const task = {
        id: this.nextId++,
        text: text,
        isCompleted: false,
      };
      this.tasks.push(task);
    }
  }

  toggleTask(task) {
    task.isCompleted = !task.isCompleted;
  }

  deleteTask(task) {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks.splice(index, 1);
  }
}

function createTaskStore() {
  return reactive(new TaskList());
}

// -------------------------------------------------------------------------
// Task Component
// -------------------------------------------------------------------------
class Task extends Component {
  static template = xml/* xml */ `
    <div class="task" t-att-class="props.task.isCompleted ? 'done' : ''">
      <input type="checkbox" t-att-checked="props.task.isCompleted" t-on-click="() => store.toggleTask(props.task)"/>
      <span><t t-esc="props.task.text"/></span>
      <span class="delete" t-on-click="() => store.deleteTask(props.task)">🗑</span>
    </div>`;

  static props = ["task"];

  setup() {
    this.store = useStore();
  }
}

// -------------------------------------------------------------------------
// Root Component
// -------------------------------------------------------------------------
class Root extends Component {
  static template = xml/* xml */ `
    <div class="todo-app">
      <input placeholder="Enter a new task" t-on-keyup="addTask" t-ref="add-input"/>
      <div class="task-list">
        <t t-foreach="store.tasks" t-as="task" t-key="task.id">
          <Task task="task"/>
        </t>
      </div>
    </div>`;
  static components = { Task };

  setup() {
    const inputRef = useRef("add-input");
    onMounted(() => inputRef.el.focus());
    this.store = useStore();
  }

  addTask(ev) {
    // 13 is keycode for ENTER
    if (ev.keyCode === 13) {
      this.store.addTask(ev.target.value);
      ev.target.value = "";
    }
  }
}

// -------------------------------------------------------------------------
// Setup
// -------------------------------------------------------------------------
const env = {
  store: createTaskStore(),
};
mount(Root, document.body, { dev: true, env });
                
    </script>
  </body>
</html>
```

## Cómo funciona

- **TaskList** es una clase con la lógica de negocio: añadir, marcar como completada y eliminar tareas.
- **createTaskStore** convierte esa clase en un objeto reactivo con `reactive`, que se comparte entre los componentes a través del entorno (`env`).
- **useStore** es un hook propio que obtiene el store del entorno con `useEnv` y lo envuelve con `useState`, para que los componentes se vuelvan a renderizar cuando cambian las tareas.
- **Task** muestra una tarea con su casilla de verificación y el botón para eliminarla.
- **Root** contiene el campo de texto (enfocado al montar el componente gracias a `useRef` y `onMounted`) y recorre la lista de tareas con `t-foreach`. Al pulsar Enter se añade una nueva tarea.
