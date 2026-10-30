// Contenido del curso y del manual de OWL en Odoo 20.
// Cada bloque es [tipo, ...datos]: p, lista, aviso, tabla, fragmento (código escrito aquí) y
// archivo (código leído de data/curso-owl: los módulos que se instalan y se prueban en Odoo).

const E = 'curso_owl_ejemplos'
const T = 'curso_owl_todo'

export const VERSION_ODOO = '20.0-20261015'
export const VERSION_OWL = '3.0.0-alpha.49'

export const ZIP_MODULOS = '/cursos/curso-owl-odoo-20-modulos.zip'
export const PDF_MANUAL = '/cursos/manual-owl-odoo-20.pdf'

export const LECCIONES = [
  {
    id: 'antes-de-empezar',
    titulo: 'Antes de empezar: Odoo 20 usa OWL 3',
    resumen: 'Por qué casi todo lo que encontrarás sobre OWL ya no funciona en Odoo 20.',
    bloques: [
      ['p', 'Odoo 20 trae **OWL 3**, todavía en versión alfa. Hasta Odoo 19 se usaba OWL 2, así que quien viene de la versión anterior da un salto de versión mayor.'],
      ['aviso', 'La documentación oficial de Odoo 20 sigue enseñando OWL 2 en sus páginas de frontend: `useState`, `t-esc`, `t-slot`, `static props`. Gran parte de ese código falla en Odoo 20. Este curso sigue el código real de la rama 20.0.'],
      ['p', 'Antes de copiar un ejemplo de un blog, revisa esta tabla. Si ves algo de la columna izquierda, describe OWL 2:'],
      ['tabla', ['Si ves…', 'En Odoo 20 se escribe…'], [
        ['`useState({ x: 1 })`', '`proxy({ x: 1 })` o `signal(1)`'],
        ['`static props = {...}`', '`props = useProps({...})`'],
        ['`<t t-esc="x"/>`', '`<t t-out="this.x"/>`'],
        ['`<t t-slot="default"/>`', '`<t t-call-slot="default"/>`'],
        ['`useRef("root")`', '`root = signal.ref()`'],
        ['`t-on-click="metodo"`', '`t-on-click="this.metodo"`']
      ]],
      ['p', 'Para saber qué versión tienes delante, abre la consola del navegador en tu Odoo y escribe `owl.__info__`. OWL 3 sigue cambiando: la versión exacta depende de la fecha de tu Odoo 20.'],
      ['p', `**Lo que necesitas:** un Odoo 20 instalado y saber lo básico de Python y JavaScript. Todos los ejemplos están en dos módulos que puedes [descargar](${ZIP_MODULOS}) e instalar.`],
      ['p', `**Cómo se ha probado:** los dos módulos y sus pruebas se han ejecutado en Odoo ${VERSION_ODOO} con OWL ${VERSION_OWL}, y los mensajes de error de este curso son los que da esa versión. La rama 20.0 actual lleva ya la alpha.50, que no se ha ejecutado.`]
    ]
  },
  {
    id: 'que-es-owl',
    titulo: 'Qué es OWL y dónde encaja',
    resumen: 'Componentes, plantillas y reactividad dentro del cliente web de Odoo.',
    bloques: [
      ['p', 'OWL es el framework de componentes de Odoo. Un componente es una **clase de JavaScript** unida a una **plantilla XML**. Cuando cambian los datos que usa la plantilla, OWL actualiza solo esa parte de la pantalla.'],
      ['p', 'Todo lo que ves en el cliente web, desde la barra superior hasta las vistas de lista y formulario, son componentes de OWL. Así arranca:'],
      ['lista', [
        'El servidor envía un **bundle** con el JavaScript, el XML y los estilos de todos los módulos instalados.',
        'Al cargar, Odoo crea la aplicación de OWL y monta el componente `WebClient`.',
        'Cada menú lanza una **acción**, y el contenedor de acciones pinta el componente que corresponde.'
      ]],
      ['p', 'Por eso tu código debe cumplir dos condiciones: estar en un bundle para que llegue al navegador y estar registrado para que Odoo sepa cuándo pintarlo. Las dos siguientes lecciones cubren justo eso.'],
      ['aviso', 'Mientras desarrolles, trabaja siempre con `?debug=1` en la URL. Activa el modo dev de OWL, que es el que valida las props y muestra errores claros. Sin él, muchos fallos pasan desapercibidos.']
    ]
  },
  {
    id: 'modulo',
    titulo: 'Crear el módulo',
    resumen: 'Estructura de carpetas, manifest y bundles de assets.',
    bloques: [
      ['p', 'Un módulo con OWL es un módulo normal de Odoo con una carpeta `static/src`. Los ejemplos de este curso viven en `curso_owl_ejemplos`:'],
      ['fragmento', 'text', `curso_owl_ejemplos/
├── __init__.py
├── __manifest__.py
├── views/ejemplos_menu.xml
└── static/src/
    ├── hola/hola.js, hola.xml
    ├── contador/contador.js, contador.xml
    └── ...`],
      ['archivo', `${E}/__manifest__.py`],
      ['p', 'La línea importante es `assets`. Añade al bundle `web.assets_backend` todo lo que haya en `static/src`, tanto JavaScript como XML y SCSS. Si un archivo no está en el bundle, el navegador nunca lo recibe.'],
      ['lista', [
        'No hace falta la cabecera `/** @odoo-module **/`: todo lo que está en `static/src` se transpila igualmente.',
        'Un archivo `mi_modulo/static/src/a/b.js` se importa como `@mi_modulo/a/b`. Dentro del mismo módulo también valen las rutas relativas.',
        'Las plantillas van en un `.xml` con raíz `<templates>`, y su nombre debe ser único. Prefíjalo con el nombre del módulo.'
      ]],
      ['p', 'Si tu módulo crea modelos, ojo: **`ir.model.access.csv` ya no existe en Odoo 20**. Ahora es `ir.access.csv`, con otras columnas. No es parte de OWL, pero afecta a todos los módulos:'],
      ['archivo', `${T}/security/ir.access.csv`],
      ['p', 'Y en las vistas se usa `<list>`, no `<tree>`.']
    ]
  },
  {
    id: 'primer-componente',
    titulo: 'Tu primer componente',
    resumen: 'Una clase, una plantilla y un registro.',
    bloques: [
      ['p', 'Tres piezas: la clase, la plantilla y el registro que permite abrirlo desde un menú.'],
      ['archivo', `${E}/static/src/hola/hola.js`],
      ['archivo', `${E}/static/src/hola/hola.xml`],
      ['p', 'Y en el XML de datos, la acción y su menú. El `tag` debe coincidir con la clave del registro:'],
      ['fragmento', 'xml', `<record id="action_hola" model="ir.actions.client">
    <field name="name">Hola</field>
    <field name="tag">curso_owl_ejemplos.hola</field>
</record>
<menuitem id="menu_hola" name="Hola" action="action_hola" parent="menu_ejemplos_root"/>`],
      ['lista', [
        '`static template` es el nombre de la plantilla XML.',
        'Los campos de clase, como `nombre = "Odoo 20"`, son la forma habitual de declarar datos.',
        'En la plantilla se escribe `this.nombre`. **Sin `this.` no funciona**: es el cambio que más veces vas a tropezar al venir de OWL 2.'
      ]],
      ['ejercicio', 'Añade a `Hola` un campo `autor` con tu nombre y muéstralo en la plantilla.', `// hola.js
autor = "Tu nombre";

<!-- hola.xml -->
<p>Por <t t-out="this.autor"/></p>`]
    ]
  },
  {
    id: 'estado',
    titulo: 'Estado reactivo: signal, computed y proxy',
    resumen: 'Cómo hacer que la pantalla cambie cuando cambian los datos.',
    bloques: [
      ['p', 'En OWL 3 `useState` ya no existe. Se usan estas piezas:'],
      ['archivo', `${E}/static/src/contador/contador.js`],
      ['archivo', `${E}/static/src/contador/contador.xml`],
      ['tabla', ['Pieza', 'Leer', 'Escribir', 'Para qué'], [
        ['`signal(v)`', '`s()`', '`s.set(v)`', 'Valores sueltos. Imprescindible para `t-model` y `t-ref`'],
        ['`computed(fn)`', '`c()`', 'No se escribe', 'Valores derivados de otros'],
        ['`proxy(obj)`', '`p.a`', '`p.a = 1`', 'Objetos y listas que se modifican por dentro']
      ]],
      ['p', 'Tres reglas que evitan la mayoría de los fallos:'],
      ['lista', [
        '**Una signal no ve los cambios internos.** `this.lista().push(4)` no actualiza la pantalla. Asigna una lista nueva con `.set()`, o usa `proxy`.',
        '**`proxy` no acepta valores simples.** `proxy(5)` falla: solo admite objetos y listas. Para un número, usa `signal`.',
        '**Si solo calculas un valor, usa `computed`**, no un efecto.'
      ]],
      ['ejercicio', 'Añade al contador un botón que lo devuelva a cero y vacíe el historial.', `// contador.js
reiniciar() {
    this.cuenta.set(0);
    this.estado.historial = [];
}

<!-- contador.xml -->
<button class="btn btn-secondary" t-on-click="this.reiniciar">Reiniciar</button>`]
    ]
  },
  {
    id: 'props',
    titulo: 'Props: pasar datos a un componente',
    resumen: 'useProps, tipos y valores por defecto.',
    bloques: [
      ['p', 'Las props son los datos que un componente recibe de su padre. En Odoo 20 hay que declararlas con `useProps`. **Sin esa declaración `this.props` no existe**, y `static props` lanza un error al crear el componente.'],
      ['archivo', `${E}/static/src/props_demo/props_demo.js`],
      ['archivo', `${E}/static/src/props_demo/props_demo.xml`],
      ['tabla', ['Tipo', 'Se escribe'], [
        ['Texto obligatorio', '`t.string()`'],
        ['Booleano opcional', '`t.boolean().optional()`'],
        ['Número con valor por defecto', '`t.number().optional(100)`'],
        ['Lista de textos', '`t.array(t.string())`'],
        ['Objeto con forma', '`t.object({ id: t.number() })`'],
        ['Texto o número', '`t.or([t.string(), t.number()])`'],
        ['Función', '`t.function()`'],
        ['Lo que sea', '`t.any()`']
      ]],
      ['lista', [
        'Para listas y objetos, el valor por defecto va en una función: `.optional(() => [])`. Así cada instancia tiene el suyo.',
        'En la llamada, `nombre="\'Ana\'"` lleva comillas simples dentro porque el valor es una expresión JavaScript.',
        'El sufijo `.translate` marca un texto como traducible, y `.bind` enlaza una función con el componente.',
        'La validación solo actúa en modo dev: otro motivo para usar `?debug=1`.',
        'Las props son de solo lectura para el hijo.'
      ]],
      ['ejercicio', 'Añade a `Saludo` una prop opcional `emoji` de tipo texto, con "👋" por defecto, y muéstrala.', `// props_demo.js, dentro de useProps
emoji: t.string().optional("👋"),

<!-- props_demo.xml -->
<t t-out="this.props.emoji"/>`]
    ]
  },
  {
    id: 'eventos',
    titulo: 'Eventos',
    resumen: 't-on, argumentos, modificadores y eventos globales.',
    bloques: [
      ['archivo', `${E}/static/src/eventos/eventos.js`],
      ['archivo', `${E}/static/src/eventos/eventos.xml`],
      ['lista', [
        '`t-on-click="this.alPulsar"` llama al método con el evento como argumento.',
        'Para pasar otros argumentos, usa una función flecha: `t-on-click="() => this.saludar(\'Ana\')"`.',
        'Modificadores: `.stop`, `.prevent`, `.self`, `.capture`, `.synthetic` y `.passive`.',
        'Para `window` o `document` usa `useListener`, que retira el evento al destruir el componente. Sustituye a `useExternalListener`.'
      ]],
      ['aviso', 'En `useListener` el manejador **no** se enlaza con el componente. Pásalo como función flecha, como en el ejemplo, o `this` no será lo que esperas.']
    ]
  },
  {
    id: 'ciclo-de-vida',
    titulo: 'Ciclo de vida',
    resumen: 'Cargar datos, reaccionar al DOM y limpiar.',
    bloques: [
      ['archivo', `${E}/static/src/ciclo_vida/ciclo_vida.js`],
      ['archivo', `${E}/static/src/ciclo_vida/ciclo_vida.xml`],
      ['tabla', ['Hook', 'Cuándo', 'Para qué'], [
        ['`setup`', 'Al crear la instancia', 'Declarar hooks'],
        ['`onWillStart`', 'Antes del primer render; puede ser asíncrono', 'Cargar datos'],
        ['`onMounted`', 'Ya en el DOM', 'Medir, integrar librerías'],
        ['`onWillUpdateProps`', 'Antes de aplicar nuevas props', 'Cargas que dependen de props'],
        ['`onWillPatch`', 'Antes de actualizar el DOM', 'Guardar el scroll'],
        ['`onPatched`', 'Tras actualizar el DOM', 'Reaccionar al DOM nuevo'],
        ['`onWillUnmount`', 'Antes de salir del DOM', 'Limpiar lo creado en `onMounted`'],
        ['`onWillDestroy`', 'Siempre, aunque no llegara a montarse', 'Limpiar lo creado en `setup`'],
        ['`onError`', 'Error en un descendiente', 'Mostrar un estado alternativo']
      ]],
      ['lista', [
        'Los hooks se llaman en `setup` o en un campo de clase, nunca dentro de un callback.',
        'Un `onWillStart` lento retrasa la pantalla: que sea rápido.',
        '`onRendered` ya no existe. Usa `onMounted` u `onPatched`.'
      ]],
      ['aviso', '**La trampa de `useEffect`:** conserva el nombre, pero ignora en silencio el array de dependencias de OWL 2 y se ejecuta de inmediato durante `setup`, antes de que exista el DOM. Sus dependencias se detectan según lo que lea la función.']
    ]
  },
  {
    id: 'plantillas',
    titulo: 'Plantillas: las directivas',
    resumen: 'Listas, condiciones, atributos, formularios, referencias y slots.',
    bloques: [
      ['archivo', `${E}/static/src/directivas/directivas.js`],
      ['archivo', `${E}/static/src/directivas/directivas.xml`],
      ['tabla', ['Directiva', 'Para qué', 'Recuerda'], [
        ['`t-out`', 'Mostrar un valor', 'Escapa el HTML salvo que pase por `markup`'],
        ['`t-foreach` + `t-as` + `t-key`', 'Repetir', '`t-key` es obligatorio y debe ser único'],
        ['`t-if`, `t-elif`, `t-else`', 'Condiciones', 'Usa `gt`, `lt`, `gte`, `lte`, `and`, `or` para que el XML sea válido'],
        ['`t-att-x`, `t-attf-x`', 'Atributos dinámicos', 'Un valor falso elimina el atributo'],
        ['`t-model`', 'Enlazar un campo de formulario', 'Exige una signal. Con `proxy`: `t-model.proxy`'],
        ['`t-ref`', 'Acceder a un nodo del DOM', 'Exige una signal: `signal.ref()`'],
        ['`t-call-slot`, `t-set-slot`', 'Contenido que pone el padre', '`t-call-slot` sustituye a `t-slot`']
      ]],
      ['p', 'Dentro de `t-foreach`, OWL crea variables automáticas a partir del nombre de `t-as`: `item_index`, `item_first`, `item_last`. Las variables locales de plantilla son la excepción: no llevan `this.`.'],
      ['p', 'En `t-model` no se llama a la signal: se escribe `t-model="this.texto"`, sin paréntesis, porque OWL necesita la signal en sí para poder escribir en ella. Y con `proxy` se añade el modificador:'],
      ['fragmento', 'xml', `<input t-model="this.texto"/>             <!-- signal -->
<input t-model.proxy="this.state.texto"/>  <!-- proxy -->`],
      ['aviso', '`t-esc` y `t-slot` aún funcionan en la versión probada, pero avisan por consola: `t-esc has been deprecated` y `t-slot has been renamed t-call-slot`. No los uses: el código de la alpha.50 ya no reconoce `t-slot`.']
    ]
  },
  {
    id: 'comunicacion',
    titulo: 'Comunicar componentes',
    resumen: 'De padre a hijo, de hijo a padre y a distancia.',
    bloques: [
      ['archivo', `${E}/static/src/comunicacion/comunicacion.js`],
      ['archivo', `${E}/static/src/comunicacion/comunicacion.xml`],
      ['tabla', ['Necesidad', 'Técnica'], [
        ['Del padre al hijo', 'Props'],
        ['Del hijo al padre', 'Una función como prop, con `.bind`'],
        ['Valor compartido que cambia a menudo', 'Una signal como prop'],
        ['Estado para partes lejanas', 'Un plugin (lección siguiente)']
      ]],
      ['p', 'Todo hijo debe aparecer en `static components`. Si no, verás `Cannot find the definition of component`.']
    ]
  },
  {
    id: 'servicios',
    titulo: 'Servicios y plugins',
    resumen: 'ORM, notificaciones, diálogos, acciones y estado compartido.',
    bloques: [
      ['p', 'Los servicios principales de Odoo pasaron a ser **plugins** de OWL. Hay dos formas de acceder a ellos y las dos funcionan en Odoo 20: `useService("nombre")`, la más extendida, y `usePlugin(Clase)`, hacia donde va el framework.'],
      ['archivo', `${E}/static/src/servicios/servicios.js`],
      ['archivo', `${E}/static/src/servicios/servicios.xml`],
      ['tabla', ['Necesidad', 'Con useService', 'Con plugin', 'Importar desde'], [
        ['ORM', '`useService("orm")`', '`usePlugin(ORM)`', '`@web/core/orm_plugin`'],
        ['Notificación', '`useService("notification")`', '`usePlugin(NotificationPlugin)`', '`@web/core/notifications/notification_plugin`'],
        ['Diálogo', '`useService("dialog")`', '`usePlugin(DialogPlugin)`', '`@web/core/dialog/dialog_plugin`'],
        ['Acciones', '`useService("action")`', '`usePlugin(ActionPlugin)`', '`@web/webclient/actions/action_plugin`']
      ]],
      ['aviso', 'No hay servicio `rpc` ni `user`: `useService("rpc")` falla. Son una función y un objeto que se importan: `import { rpc } from "@web/core/network/rpc"` e `import { user } from "@web/core/user"`.'],
      ['p', 'Para compartir estado entre componentes lejanos, crea tu propio plugin. Este es el del proyecto final, que comparten la pantalla de tareas y el icono de la barra superior:'],
      ['archivo', `${T}/static/src/todo_plugin.js`]
    ]
  },
  {
    id: 'client-action',
    titulo: 'Crear una pantalla: client action',
    resumen: 'Un componente, su registro y un menú.',
    bloques: [
      ['p', 'Ya has hecho varias sin saberlo. Una client action necesita tres piezas: el componente, su registro en `actions` y un `ir.actions.client` cuyo `tag` coincida. La forma completa declara además sus props estándar:'],
      ['fragmento', 'js', `import { Component, useProps } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { standardActionServiceProps } from "@web/webclient/actions/action_plugin";

export class MiAccion extends Component {
    static template = "mi_modulo.MiAccion";
    props = useProps(standardActionServiceProps);
}

registry.category("actions").add("mi_modulo.mi_accion", MiAccion);`],
      ['p', 'La acción recibe sus datos en `this.props.action`, incluidos `params` y `context`.'],
      ['aviso', 'La ruta `@web/webclient/actions/action_service` ya no existe. Ahora es `@web/webclient/actions/action_plugin`.']
    ]
  },
  {
    id: 'parches',
    titulo: 'Modificar componentes de Odoo con patch',
    resumen: 'Cambiar el comportamiento sin tocar el código original.',
    bloques: [
      ['p', '`patch` modifica un objeto en su sitio. Dentro de un parche funciona `super`, y en `setup` puedes llamar a hooks. Este parche avisa al guardar una tarea:'],
      ['archivo', `${T}/static/src/patches/form_controller_patch.js`],
      ['lista', [
        'Parchea `Clase.prototype` para métodos de instancia, y `Clase` para estáticos.',
        'Pon nombres propios a lo que añadas, para no pisar atributos del original.',
        'Las plantillas se extienden con `t-inherit` y `t-inherit-mode="extension"`. Lo que añadas también lleva `this.`.'
      ]],
      ['aviso', '**Los campos de clase no se pueden parchear.** `props = useProps(...)` o `x = signal(...)` se crean en cada instancia, no en el prototipo. Para añadir una prop, llama a `useProps` con otro nombre dentro del `setup` parcheado, o amplía el esquema si el componente lo exporta.']
    ]
  },
  {
    id: 'campo',
    titulo: 'Widget de campo propio',
    resumen: 'Cambiar cómo se muestra y se edita un campo.',
    bloques: [
      ['p', 'Un widget es un objeto con `component` en el registro `fields`. Este muestra un entero como estrellas:'],
      ['archivo', `${T}/static/src/todo_stars_field/todo_stars_field.js`],
      ['archivo', `${T}/static/src/todo_stars_field/todo_stars_field.xml`],
      ['p', 'Se usa en cualquier vista, y `options` llega a `extractProps`:'],
      ['fragmento', 'xml', `<field name="priority" widget="curso_stars" options="{'max_stars': 5}"/>`],
      ['lista', [
        'El valor se lee con `this.props.record.data[this.props.name]`.',
        'Se escribe con `this.props.record.update({ ... })`.',
        '`readonly` llega solo.',
        'Los iconos usan `<i class="oi" data-icon="star"/>`: el núcleo de Odoo 20 ya no usa las clases `fa`.'
      ]]
    ]
  },
  {
    id: 'systray',
    titulo: 'Icono en la barra superior',
    resumen: 'Un elemento de systray con contador en vivo.',
    bloques: [
      ['archivo', `${T}/static/src/todo_systray/todo_systray.js`],
      ['archivo', `${T}/static/src/todo_systray/todo_systray.xml`],
      ['p', 'Se carga en `onMounted` y no en `onWillStart` para no retrasar la barra superior. Como el contador viene del plugin, se actualiza solo cuando creas o completas una tarea en la otra pantalla.']
    ]
  },
  {
    id: 'pruebas',
    titulo: 'Pruebas con hoot',
    resumen: 'Probar tus componentes en el navegador.',
    bloques: [
      ['p', 'Odoo 20 usa **hoot** para probar JavaScript. Los archivos van en `static/tests/`, su nombre debe terminar en `.test.js` y se añaden al bundle `web.assets_unit_tests`, como en el manifest del proyecto final. Se ejecutan abriendo `/web/tests`. Para lanzar solo las tuyas, añade el filtro con comillas, que busca el texto exacto: `/web/tests?filter="curso_owl_todo"`. Sin comillas la búsqueda es aproximada y coinciden muchas pruebas de otros módulos.'],
      ['archivo', `${T}/static/tests/todo_action.test.js`],
      ['aviso', 'En hoot, `edit()` pulsa Enter por defecto. Si tu campo crea algo al pulsar Enter, usa `confirm: false` o la acción se ejecutará dos veces.']
    ]
  },
  {
    id: 'proyecto',
    titulo: 'Proyecto final: lista de tareas',
    resumen: 'Todo lo anterior en un módulo completo.',
    bloques: [
      ['p', `El módulo \`curso_owl_todo\` reúne el curso: modelo, seguridad, una client action, componentes hijos, un plugin compartido, un icono en la barra superior, un widget de campo, un parche y pruebas. [Descárgalo](${ZIP_MODULOS}), cópialo en tu carpeta de addons e instálalo.`],
      ['p', 'Esta es la pantalla principal. Fíjate en cómo usa cada pieza del curso:'],
      ['archivo', `${T}/static/src/todo_action/todo_action.js`],
      ['archivo', `${T}/static/src/todo_action/todo_action.xml`],
      ['lista', [
        '**Datos:** el plugin los carga con `onWillStart` y los guarda en una signal.',
        '**Filtro:** `visibleTodos` es un `computed` que depende de las tareas y del filtro.',
        '**Formulario:** `t-model` con signals.',
        '**Hijos:** `TodoItem` recibe datos y funciones por props, y `StatCard` usa un slot.'
      ]]
    ]
  },
  {
    id: 'errores',
    titulo: 'Errores comunes',
    resumen: 'El mensaje que ves, qué significa y cómo arreglarlo.',
    bloques: [
      ['tabla', ['Error', 'Causa', 'Solución'], [
        ['`Component "X" defines a static "props"`', 'Código de OWL 2', '`props = useProps({...})`'],
        ['`useState is not a function`', 'API eliminada', '`proxy` o `signal`'],
        ['`Cannot read properties of undefined` en plantilla', 'Falta `this.` o falta `useProps`', 'Añadirlos'],
        ['`Invalid handler expression` al hacer clic', '`t-on-click="metodo"` sin `this.`', '`t-on-click="this.metodo"`'],
        ['`Ref is undefined or null`', '`t-ref="nombre"`', '`t-ref="this.nombre"` con `signal.ref()`'],
        ['`Invalid t-model expression`', '`t-model` sobre un valor de `proxy`', 'Una signal, o `t-model.proxy`'],
        ['`t-slot has been renamed t-call-slot` en consola', 'Plantilla antigua', '`<t t-call-slot="x"/>`'],
        ['`t-esc has been deprecated` en consola', 'Plantilla antigua', '`t-out`'],
        ['`Directive t-foreach should always be used with a t-key!`', 'Falta `t-key`', 'Añadir una clave única'],
        ['`Missing template: "x"`', 'El XML no está en el bundle o el nombre es otro', 'Revisar `assets` y `t-name`'],
        ['`Cannot find the definition of component "X"`', 'Falta en `static components`', 'Añadirlo'],
        ['`Service rpc is not available`', 'Ya no es un servicio', 'Importar `rpc`'],
        ['`Unknown plugin "X"`', 'Falta `services.add`', 'Registrar el plugin'],
        ['`No active scope`', 'Hook fuera de `setup`', 'Moverlo'],
        ['`Invalid component props (X)`', 'Props incorrectas', 'Corregir la llamada'],
        ['`Maximum render iterations ... exceeded`', 'Se escribe estado durante el render', 'Mover la escritura a un hook'],
        ['Error de acceso al instalar', 'Falta `ir.access.csv` o sigue el formato antiguo', 'Lección 3']
      ]],
      ['p', 'Para depurar:'],
      ['lista', [
        '`?debug=1` activa la validación, y `?debug=assets` carga el código sin minificar.',
        '`t-log` y `t-debug` en una plantilla sirven para inspeccionar valores.',
        '`owl.__info__` en la consola muestra la versión de OWL.',
        'Las Owl devtools son una extensión para Chrome y Firefox.'
      ]]
    ]
  },
  {
    id: 'migrar',
    titulo: 'Migrar de Odoo 19 a Odoo 20',
    resumen: 'Tabla de cambios para actualizar tu código.',
    bloques: [
      ['tabla', ['Odoo 19 (OWL 2)', 'Odoo 20 (OWL 3)'], [
        ['`useState(obj)`', '`proxy(obj)` o `signal(v)`'],
        ['`reactive(obj)`', '`proxy(obj)`'],
        ['`static props`, `static defaultProps`', '`props = useProps({...})`'],
        ['`{ type: String, optional: true }`', '`t.string().optional()`'],
        ['`props.x` en plantilla', '`this.props.x`'],
        ['`t-on-click="fn"`', '`t-on-click="this.fn"`'],
        ['`t-esc`', '`t-out`'],
        ['`t-slot`', '`t-call-slot`'],
        ['`useRef("x")` + `t-ref="x"`', '`x = signal.ref()` + `t-ref="this.x"`'],
        ['`t-model="state.x"`', '`t-model="this.x"` o `t-model.proxy="this.state.x"`'],
        ['`useExternalListener(...)`', '`useListener(...)`'],
        ['`useEffect(fn, () => [deps])`', '`useEffect(fn)` o `useLayoutEffect` de `@web/owl2/utils`'],
        ['`onRendered`, `useChildSubEnv`', 'Eliminados'],
        ['`env.isSmall`', '`useService("ui").isSmall`'],
        ['`@web/webclient/actions/action_service`', '`@web/webclient/actions/action_plugin`'],
        ['`ir.model.access.csv`', '`ir.access.csv`'],
        ['`<tree>`', '`<list>`']
      ]],
      ['aviso', 'Odoo incluye una capa de compatibilidad en `@web/owl2/utils`, pero su propia cabecera dice que es temporal. Úsala para migrar por partes, no para código nuevo.']
    ]
  },
  {
    id: 'buenas-practicas',
    titulo: 'Buenas prácticas',
    resumen: 'Hábitos para que tu código dure.',
    bloques: [
      ['lista', [
        '**Prefija** plantillas, tags y claves con el nombre del módulo.',
        '**Declara las props con esquema** y prueba con `?debug=1`.',
        '**Escribe siempre `this.`** para lo que pertenece al componente.',
        '**Elige bien el estado:** `signal` para valores sueltos, `proxy` para objetos, `computed` para derivados.',
        '**Usa `computed` y no un efecto** para calcular valores.',
        '**Mantén rápidos los `onWillStart`.**',
        '**Limpia** con `onWillDestroy` lo creado en `setup`, y con `onWillUnmount` lo creado en `onMounted`.',
        '**Traduce:** `_t` en JavaScript y `.translate` en props.',
        '**Usa `markup` solo con HTML de confianza.**',
        '**Escribe pruebas** para los componentes con lógica.',
        '**Desconfía del código antiguo:** si ves `useState` o `t-esc`, es OWL 2.'
      ]]
    ]
  }
]
