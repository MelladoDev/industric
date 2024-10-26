# hooks

En React, los **hooks** son funciones que te permiten "enganchar" funcionalidades de React a tus componentes funcionales. Son la forma moderna de manejar el estado y efectos secundarios, y permiten hacer muchas de las cosas que antes solo podías lograr con **componentes de clase**.

Aquí te explico los hooks más comunes y cómo funcionan:

## 1. **`useState`** - Manejo del Estado Local

El hook `useState` te permite agregar estado local a un componente funcional. Es útil cuando necesitas manejar datos que cambian, como el estado de un formulario, un contador, o la visibilidad de un elemento.

**Ejemplo:**

```javascript
import React, { useState } from "react";

function Contador() {
  // Declarar una variable de estado llamada "count" con el valor inicial de 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      {/* Al hacer clic, incrementa el estado count */}
      <button onClick={() => setCount(count + 1)}>Haz clic</button>
    </div>
  );
}
```

En este ejemplo:

- `count` es el valor del estado.
- `setCount` es la función que actualiza el estado.
- `useState(0)` inicializa `count` en `0`.

### 2. **`useEffect`** - Efectos Secundarios

El hook `useEffect` se utiliza para realizar efectos secundarios en los componentes, como obtener datos de una API, suscribirse a eventos, o modificar el DOM. Este hook se ejecuta después de que el componente se renderiza.

**Ejemplo:**

```javascript
import React, { useState, useEffect } from "react";

function Datos() {
  const [data, setData] = useState([]);

  // useEffect para obtener datos de una API cuando el componente se monta
  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Array vacío significa que solo se ejecuta una vez al montar

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

En este ejemplo:

- `useEffect` se ejecuta cuando el componente se monta por primera vez.
- El segundo argumento `[]` es la **lista de dependencias**, que controla cuándo se ejecuta el efecto.
- Si se deja vacío `[]`, el efecto solo se ejecuta una vez (al montar).
- Si colocas variables en esta lista, el efecto se ejecutará cuando cambien esas variables.

### 3. **`useContext`** - Consumo de Contexto

El hook `useContext` se utiliza para consumir datos de un contexto en React sin necesidad de utilizar un componente `Consumer`.

**Ejemplo:**

```javascript
import React, { useContext } from "react";
import MyContext from "./MyContext";

function Componente() {
  // Consumiendo datos desde MyContext
  const { user, login } = useContext(MyContext);

  return (
    <div>
      <p>Usuario: {user.name}</p>
      <button onClick={login}>Iniciar sesión</button>
    </div>
  );
}
```

En este ejemplo:

- `useContext(MyContext)` te da acceso a los valores almacenados en el contexto `MyContext`.

### 4. **`useReducer`** - Manejo del Estado Complejo

El hook `useReducer` es similar a `useState`, pero es más útil cuando tienes un estado complejo o cuando el estado depende de múltiples acciones. Utiliza un **reducer**, que es una función que decide cómo cambiar el estado.

**Ejemplo:**

```javascript
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Contador() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrementar
      </button>
    </div>
  );
}
```

En este ejemplo:

- `reducer` es una función que decide cómo cambiar el estado basado en una acción.
- `dispatch` es la función que usas para enviar acciones al reducer.

### 5. **`useRef`** - Referencias y Manipulación del DOM

El hook `useRef` se utiliza para acceder directamente al DOM o para mantener una referencia mutable que no provoca una nueva renderización cuando cambia. Es muy útil para enfocar un input, mantener el estado de intervalos, o almacenar valores que no necesitan causar una renderización.

**Ejemplo:**

```javascript
import React, { useRef } from "react";

function EnfoqueInput() {
  const inputRef = useRef(null);

  const enfocarInput = () => {
    // Enfocar el input directamente usando la referencia
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={enfocarInput}>Enfocar Input</button>
    </div>
  );
}
```

En este ejemplo:

- `useRef(null)` crea una referencia inicializada a `null`.
- `inputRef.current` se utiliza para acceder al elemento DOM del input.

### 6. **`useMemo`** - Optimización de Cálculos

El hook `useMemo` se utiliza para memorizar valores calculados de manera que solo se recalculen cuando cambian las dependencias. Es útil para optimizar el rendimiento cuando tienes cálculos pesados.

**Ejemplo:**

```javascript
import React, { useMemo } from "react";

function Lista({ items }) {
  // Filtrar solo elementos pares, se recalcula solo si cambia 'items'
  const evenItems = useMemo(
    () => items.filter((item) => item % 2 === 0),
    [items]
  );

  return (
    <ul>
      {evenItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

### 7. **`useCallback`** - Optimización de Funciones

El hook `useCallback` es similar a `useMemo`, pero se utiliza para memorizar funciones. Es útil cuando pasas funciones a componentes hijos y no quieres que se redefinan en cada renderizado.

**Ejemplo:**

```javascript
import React, { useState, useCallback } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  // Memoriza la función para que no se vuelva a crear en cada render
  const incrementar = useCallback(() => setCount(count + 1), [count]);

  return <button onClick={incrementar}>Incrementar {count}</button>;
}
```

Estos son los hooks principales que React ofrece, pero también puedes crear tus propios **hooks personalizados** si necesitas reutilizar lógica en diferentes componentes.
