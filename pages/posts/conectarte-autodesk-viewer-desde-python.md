---
title: Conectarte Autodesk Viewer Desde Python
date: 2024/10/10
description: Conectarte Autodesk Viewer Desde Python
tag: python, autodesk, viewer
author: Marlon Falcon Hernandez
---

# Conectarte Autodesk Viewer Desde Python

Para conectarte al Autodesk Viewer (Autodesk Forge) desde Python y acceder a los volúmenes de los modelos BIM, necesitarás interactuar con la API de Autodesk Forge. Aquí te explico los pasos que debes seguir para realizar esta conexión y obtener la información de los volúmenes:

1. Registro en Autodesk Forge y Credenciales:

	•	Crea una cuenta en Autodesk Forge y obtén tus credenciales (Client ID y Client Secret) al registrar tu aplicación en el portal de desarrolladores.
	•	Estas credenciales serán necesarias para autenticarte y obtener un token de acceso.

2. Instalar Librerías de Python:

Instala las librerías necesarias para realizar peticiones HTTP y manejar la autenticación:

```bash
pip install requests
```

3. Autenticación para Obtener el Token de Acceso:

Para autenticarte en la API de Autodesk Forge, debes obtener un token OAuth 2.0 con tu Client ID y Client Secret. El siguiente código muestra cómo obtener el token:

```python
import requests

# Credenciales de Autodesk Forge
client_id = 'TU_CLIENT_ID'
client_secret = 'TU_CLIENT_SECRET'

# URL para solicitar el token
auth_url = 'https://developer.api.autodesk.com/authentication/v1/authenticate'

# Datos para la solicitud de token
data = {
    'client_id': client_id,
    'client_secret': client_secret,
    'grant_type': 'client_credentials',
    'scope': 'data:read data:write'
}

# Solicitud de token
response = requests.post(auth_url, data=data)
if response.status_code == 200:
    access_token = response.json()['access_token']
    print('Token de acceso:', access_token)
else:
    print('Error al obtener el token:', response.text)
```

4. Subir el Modelo y Obtener el URN:

Si no tienes el URN (Unique Resource Name) de tu modelo BIM, debes subirlo a Autodesk Forge. Para ello, necesitarás primero cargar el archivo a un bucket de almacenamiento y luego derivarlo a un formato compatible para su visualización. Aquí están las solicitudes API necesarias:

Crear un bucket:

```python
bucket_url = 'https://developer.api.autodesk.com/oss/v2/buckets'
headers = {'Authorization': f'Bearer {access_token}', 'Content-Type': 'application/json'}
bucket_data = {
    "bucketKey": "nombre_unico_bucket",
    "policyKey": "transient"  # Puede ser 'transient', 'temporary' o 'persistent'
}
response = requests.post(bucket_url, json=bucket_data, headers=headers)
print(response.json())
```

Subir el modelo:
    
```python
upload_url = f'https://developer.api.autodesk.com/oss/v2/buckets/nombre_unico_bucket/objects/tu_modelo_bim.rvt'
with open('ruta_de_tu_archivo.rvt', 'rb') as f:
    response = requests.put(upload_url, headers={'Authorization': f'Bearer {access_token}'}, data=f)
print(response.json())
```

Obtener el URN para derivación:
Una vez subido el archivo, obtendrás un objectId. Ese objectId será necesario para la derivación y conversión a formatos compatibles con Autodesk Viewer.

5. Obtener los Volúmenes del Modelo:

Una vez que el modelo esté cargado y derivado, puedes usar la API de extracción de propiedades (GET properties) para obtener los volúmenes del modelo:

```python
urn = 'TU_URN_ENCODED'  # El URN debe estar codificado en base64
headers = {'Authorization': f'Bearer {access_token}'}
properties_url = f'https://developer.api.autodesk.com/modelderivative/v2/designdata/{urn}/metadata'

response = requests.get(properties_url, headers=headers)
metadata = response.json()
print(metadata)
```

Luego, para obtener propiedades específicas como el volumen de los objetos, necesitarás buscar en la respuesta de la API dentro de los metadatos que se devuelven y filtrar los elementos que contengan información volumétrica.

6. Filtrar la Información de Volumen:

Puedes extraer la información específica de los volúmenes del JSON que devuelve la API. Dependiendo del modelo, esta información puede estar bajo diferentes categorías o propiedades. Un ejemplo sencillo para extraer volúmenes:

```python
# Obtener las propiedades específicas del modelo
properties_url = f'https://developer.api.autodesk.com/modelderivative/v2/designdata/{urn}/metadata/{metadata_id}/properties'
response = requests.get(properties_url, headers=headers)
properties = response.json()

# Filtrar y mostrar volúmenes
for item in properties['data']['objects']:
    if 'Volume' in item:
        print(f"Nombre: {item['name']}, Volumen: {item['Volume']}")
```

7. Documentación de Autodesk Forge:

Para obtener más detalles sobre las API y los endpoints disponibles, puedes consultar la documentación oficial de Autodesk Forge.

Resumen de Pasos:

	1.	Regístrate en Autodesk Forge y obtén tus credenciales.
	2.	Usa Python para autenticarte y obtener un token de acceso.
	3.	Sube tu modelo BIM a Autodesk Forge.
	4.	Obtén el URN derivado y consulta las propiedades del modelo.
	5.	Extrae y filtra la información de los volúmenes.

Con estos pasos, podrás leer los volúmenes de un modelo alojado en Autodesk Forge desde Python.