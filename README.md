# 📱 DevApp

DevApp es una aplicación móvil construida con React Native tipo eccommerce.

---

## 🚀 Características

- Pantalla de bienvenida básica
- Soporte para estilos personalizados: se utiliza StyleSheet de React Native.
- Estructura escalable: la carpeta src ya está organizada para que puedas escalar modularmente con componentes, navegación, servicios, etc.
- Uso de Expo: la configuración sugiere que es compatible con Expo para desarrollo móvil más ágil.


---

## 🧰 Tecnologías utilizadas

- React Native
- JavaScript
- Expo (para desarrollo y despliegue rápido)
- Estilos en línea / CSS-in-JS

---

## 📂 Estructura del proyecto

DevApp/
│
├── App.js                  # Punto de entrada principal, renderiza la interfaz inicial
├── index.js                # Registro de la aplicación para el entorno nativo
├── app.json                # Configuración de Expo
├── assets/                 # Carpeta para recursos estáticos (imágenes, íconos)
│
├── src/                    # Código fuente de la aplicación
│   ├── components/         # Espacio reservado para componentes reutilizables
│   ├── navigation/         # Carpeta para configuración de navegación (no implementada aún)
│   ├── screens/            # Carpeta sugerida para pantallas de la app
│   ├── services/           # Lógica de negocio, APIs, etc. (vacía o no implementada)
│   └── styles/             # Posible ubicación para estilos globales
│
├── .gitignore              # Ignora archivos no deseados en Git
├── package.json            # Lista de dependencias y scripts npm
└── README.md               # Documentación del proyecto


