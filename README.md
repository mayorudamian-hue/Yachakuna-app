# 🦙 Yachakuna — Aprendé Quechua boliviano

**Yachakuna** (del quechua: *los que aprenden*) es una app web gratuita e interactiva para aprender quechua boliviano, diseñada para comunidades de habla hispana en Argentina y Bolivia.

👉 **[Abrir la app](https://mayorudamian-hue.github.io/Yachakuna-app/)**

---

## ✨ ¿Qué es Yachakuna?

Una app de aprendizaje de idiomas al estilo Duolingo, pero enfocada 100% en el quechua boliviano hablado en comunidades migrantes del Gran Buenos Aires. Sin publicidad, sin suscripciones, sin registro obligatorio.

---

## 🚀 Funciones principales

### 📚 Biblioteca
Diccionario personal con más de 100 palabras y frases organizadas en unidades temáticas. Cada tarjeta incluye emoji, audio y sistema de **Repaso Espaciado (SRS)** para memorizar de forma eficiente. Buscador que encuentra palabras en todas las unidades al mismo tiempo.

### 🎮 Yachakunapaj — Purina
El camino de aprendizaje con 14 unidades organizadas en secciones que se desbloquean progresivamente. Cuatro modos de práctica: opciones múltiples, teclado, completar la frase y ordenar palabras. Las sesiones largas se pueden pausar y retomar desde donde uno dejó.

### 📖 Leerinapaj — Allinta leerina
Cuentos interactivos en quechua con traducción al español. Tocás cada burbuja para ver el significado. Al terminar cada historia ganás XP y desbloqueás una insignia.

### 🏆 Ñaupajman — Salón de la Fama
Sistema de logros, trofeos por unidad e insignias de historias. Los trofeos requieren completar la unidad sin perder vidas y se mantienen mientras se repase regularmente.

### 💬 Comenta
Foro de la comunidad para hacer preguntas, sugerencias y comentarios. El profe responde directamente con un badge especial.

---

## 📱 Instalación como app

No requiere tienda de aplicaciones.

**Android (Chrome):** Abrí la app → menú ⋮ → *Agregar a pantalla de inicio*

**iPhone / iPad (Safari):** Abrí la app → botón compartir → *Añadir a pantalla de inicio*

---

## 🗂️ Contenido actual

| # | Unidad | Tema |
|---|--------|------|
| 1 | Pronombres personales | Noqa, Qan, Pay... |
| 2 | Saludos | Imaynalla, Allin p'unchay... |
| 3 | Presentación | Ima sutiyki, Kusikuni rejsisuspa... |
| 4 | Sentimientos y estados | Kusisqa, Llakisqa, Sayk'usqa... |
| 5 | Naturaleza y clima | Inti, Para, Urqo, Mayu... |
| 6 | Negación | Mana...chu |
| 7 | Los plurales | Sufijos -s y -kuna |
| 8 | Conjunción "o" | Sufijo -chu...chu |
| 9 | Sufijos -man y -manta | Dirección y origen |
| 10 | Medios de transporte | Sufijo -pi |
| 11 | Sufijo -chu en pregunta | Preguntas de sí/no |
| 12 | Vocabulario de cuentos | Wayna, Sumaj, Chayan... |
| 13 | Los números | Del 1 al 100 |
| 14 | La edad | Sufijo -yoj |

**Historias disponibles:** Inti, tapurikoj wayna (5 partes)

---

## 🛠️ Tecnología

- HTML / CSS / JavaScript puro — sin frameworks
- Almacenamiento local con `localStorage`
- Foro con **Firebase Firestore**
- Análisis de uso con **Google Analytics**
- Notificaciones al docente con **EmailJS**
- Instalable como PWA (Progressive Web App)
- Contenido sincronizado automáticamente desde este repositorio

---

## 📁 Estructura del repositorio

```
/
├── index.html              # App completa (single file)
├── manifest.json           # Configuración PWA
├── sw.js                   # Service Worker
├── icono-192.png           # Ícono de la app
├── icono-512.png           # Ícono de la app (grande)
├── Unidades_1_a_11.json    # Vocabulario unidades 1–11
├── Unidades_12_13_14.json  # Vocabulario unidades 12–14
├── Historia_Inti_*.json    # Historias de Leerinapaj
└── LICENSE                 # CC BY-NC 4.0
```

---

## 🤝 Contribuciones

¿Hablás quechua boliviano y querés colaborar? ¡Bienvenido!

- **Correcciones de vocabulario:** abrí un Issue o un Pull Request
- **Nuevas historias:** el formato JSON está documentado en los archivos existentes
- **Audios nativos:** si querés grabar pronunciaciones, contactame

---

## 📜 Licencia

Este proyecto está publicado bajo licencia **[Creative Commons BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)**.

Podés usar y adaptar el material libremente, pero **no con fines comerciales** y siempre con atribución al autor original.

© 2025 Damián Mayoru — [mayoru.damian@gmail.com](mailto:mayoru.damian@gmail.com)

---

> *"Mana yachajqa yachakun. El que no sabe, aprende."* 🦙
