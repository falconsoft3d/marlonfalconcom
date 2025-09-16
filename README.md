# Marlon Falcon Website



## Usar Node 22 en este proyecto

Este repo está configurado para usar Node 22. Hay varios archivos que fijan la versión para diferentes gestores de entorno:

- `.nvmrc` — contiene `22` para usuarios de nvm
- `.node-version` — contiene `22` para asdf u otras herramientas
- `package.json` — campo `engines` y `volta.node` apuntan a Node 22

Comandos útiles:

```bash
# Usando nvm (instala si hace falta y activa la versión 22)
nvm install 22
nvm use

# Usando Volta (instala automáticamente la versión declarada en package.json)
volta install node@22

# Comprobar versión activa
node -v
```

Si usas otra herramienta (asdf, fnm, etc.), el archivo `.node-version` también contiene `22`.


