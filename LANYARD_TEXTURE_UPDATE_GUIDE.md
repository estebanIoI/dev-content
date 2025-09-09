# Guía para Actualizar Texturas del Lanyard 3D

Esta guía documenta los pasos exactos para cambiar la imagen/textura de las tarjetas 3D del lanyard en el portafolio.

## 📁 Estructura de Archivos Relevantes

```
src/
├── assets/
│   └── Lanyard/
│       ├── lanyard.png
│       ├── card lanyard.png
│       └── card lanyard1.png ← Nueva imagen
├── components/
│   ├── Lanyard/
│   │   ├── Lanyard.jsx ← Componente principal
│   │   └── LanyardVariant.jsx ← Componente con variantes
│   └── LanyardCarousel.jsx ← Carrusel que usa LanyardVariant
```

## 🔄 Pasos para Cambiar la Textura

### Paso 1: Preparar la Nueva Imagen
1. Colocar la nueva imagen en la carpeta `src/assets/Lanyard/`
2. Asegurarse de que el nombre del archivo sea correcto (ej: `card lanyard1.png`)

### Paso 2: Actualizar Imports en LanyardVariant.jsx
Cambiar las importaciones de texturas:

```jsx
// ANTES:
import lanyard1 from '../../assets/Lanyard/lanyard.png';
import cardLanyard from '../../assets/Lanyard/card lanyard.png';

// DESPUÉS:
import lanyard1 from '../../assets/Lanyard/card lanyard1.png';
import cardLanyard from '../../assets/Lanyard/card lanyard1.png';
```

### Paso 3: Actualizar Import en Lanyard.jsx
Cambiar la importación de textura:

```jsx
// ANTES:
import lanyard from '../../assets/Lanyard/lanyard.png';

// DESPUÉS:
import lanyard from '../../assets/Lanyard/card lanyard1.png';
```

### Paso 4: Configurar Textura de la Tarjeta en Lanyard.jsx
Agregar configuración de textura para la tarjeta:

```jsx
// Agregar después de las importaciones de useTexture:
const cardTexture = useTexture(lanyard); // Usar la misma textura para la tarjeta

// Agregar useEffect para configurar la textura:
useEffect(() => {
  if (cardTexture) {
    cardTexture.flipY = false;
    cardTexture.wrapS = cardTexture.wrapT = THREE.ClampToEdgeWrapping;
    cardTexture.needsUpdate = true;
  }
}, [cardTexture]);
```

### Paso 5: Cambiar Material de la Tarjeta en Lanyard.jsx
Modificar el material de la geometría de la tarjeta:

```jsx
// ANTES:
<meshPhysicalMaterial map={materials.base.map} ... />

// DESPUÉS:
<meshPhysicalMaterial map={cardTexture} ... />
```

### Paso 6: Configurar Textura de la Tarjeta en LanyardVariant.jsx
Agregar la misma configuración:

```jsx
// Agregar después de las importaciones de useTexture:
const cardTexture = useTexture(getLanyardTexture()); // Usar la misma textura para la tarjeta

// Agregar useEffect para configurar la textura:
useEffect(() => {
  if (cardTexture) {
    cardTexture.flipY = false;
    cardTexture.wrapS = cardTexture.wrapT = THREE.ClampToEdgeWrapping;
    cardTexture.needsUpdate = true;
  }
}, [cardTexture]);
```

### Paso 7: Cambiar Material de la Tarjeta en LanyardVariant.jsx
Modificar el material de la geometría de la tarjeta:

```jsx
// ANTES:
<meshPhysicalMaterial map={materials.base.map} ... />

// DESPUÉS:
<meshPhysicalMaterial map={cardTexture} ... />
```

## ⚠️ Puntos Importantes

### Diferencia entre Banda y Tarjeta
- **Banda del lanyard**: La cuerda/cordón que sostiene la tarjeta (usa `texture`)
- **Tarjeta 3D**: La tarjeta misma que cuelga (usa `cardTexture`)

### Configuración de Textura Crítica
```jsx
cardTexture.flipY = false;              // Corrige volteo vertical
cardTexture.wrapS = THREE.ClampToEdgeWrapping;  // Evita repetición horizontal
cardTexture.wrapT = THREE.ClampToEdgeWrapping;  // Evita repetición vertical
cardTexture.needsUpdate = true;         // Fuerza actualización
```

### Archivos que Necesitan Modificación
1. ✅ `src/components/Lanyard/Lanyard.jsx` 
2. ✅ `src/components/Lanyard/LanyardVariant.jsx`

**NOTA**: No es necesario modificar `LanyardCarousel.jsx` ya que solo usa el componente LanyardVariant.

## 🎯 Resultado Final
- La banda del lanyard mostrará la nueva imagen
- La tarjeta 3D mostrará la nueva imagen correctamente orientada
- Todas las variantes del carrusel (1, 2, 3, 4) usarán la nueva textura

## 📝 Para Futuras Actualizaciones
1. Reemplazar la imagen en `src/assets/Lanyard/`
2. Seguir los pasos 2-7 de esta guía
3. Verificar que la imagen se muestre correctamente orientada
4. Si hay problemas de orientación, ajustar las propiedades de textura en los useEffect

---

