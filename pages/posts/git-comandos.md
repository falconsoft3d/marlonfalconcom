---
title: Comandos git
date: 2022/12/18
description: Docker crear ftp
tag: git
author: Marlon Falcon Hernandez
---

# Comandos git

Tag
```
git tag 
git tag 0.0.1
git push --tags && push origin master
```

requirements
```
pip freeze > requirements.txt
pip install -r requirements.txt
```

ver diferencias
```
git diff
```

ver lo modificado en un commit
```
git show <COMMIT>
```

ver lo que tenemos local
```
git status
```

ver rama
```
git branch
```

Crear una rama
```
git checkout -b branchname
```

Eliminar una rama
```
git checkout -d branchname
```

Unir Rama
```
git checkout master
git merge branchname
```

ver el log
```
git log -3
```
```
git log -5 --pretty=oneline
```

Descartar los cambios. Regresa todo al último commit de la rama
```
git reset --hard
```

