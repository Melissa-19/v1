# comandos
``git --version``
``node -v``
``npm -v``
# Iniciar proyecto
``npm init -y``

## Manejo de git
``git add .``
``git commit -m "v1"``
``git branch -M master``
``git remote add origin https://github.com/Melissa-19/v1.git``
``git push -u origin master``


# 📁Estructura profesionales de una API en Node.js
api-node
    |-src **Aqui vive todo el código real del proyecto**
    |- config **Configuraciones globales**
    |- controllers **Controla las peticiones HTTP**
    |- middlewares **Intermediarios de seguridad y validación**
    |- models **Representa las tablas de la base de datos**
    |- routes **Define las URLs de la API**
    |- services **Lógica del negocio**
    |- utils **Funciones reutilizables**
    |- app.js **Configuración de la aplicación**
    |- server.js **Punto de arranque**
    