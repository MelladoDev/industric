# Guard

En el contexto de desarrollo de software, especialmente en aplicaciones web y frameworks como Angular, React, y otros, los **guards** (o "guardianes") son herramientas que permiten controlar el acceso a ciertas rutas o recursos de la aplicación. Sirven como mecanismos de protección que determinan si un usuario puede acceder a una ruta específica o si necesita ser redirigido a otra parte de la aplicación.

## Tipos Comunes de Guards

1. **Auth Guards**: Verifican si un usuario está autenticado antes de permitirle acceder a una ruta. Si no está autenticado, pueden redirigirlo a una página de inicio de sesión.

   **Ejemplo**:
   - Un guard de autenticación podría verificar si hay un token de sesión válido antes de permitir el acceso a una página de perfil de usuario.

2. **Role Guards**: Se aseguran de que el usuario tenga el rol adecuado para acceder a una ruta. Esto es útil en aplicaciones donde diferentes usuarios tienen distintos niveles de acceso.

   **Ejemplo**:
   - Un guard de rol podría permitir el acceso a la administración solo a los usuarios con el rol de "administrador".

3. **CanDeactivate Guards**: Se utilizan para prevenir la navegación a otra ruta si hay cambios no guardados en un formulario o componente. Esto es útil para evitar que los usuarios pierdan información accidentalmente.

   **Ejemplo**:
   - Un guard que pregunte al usuario si está seguro de que desea abandonar una página con un formulario no guardado.

4. **CanLoad Guards**: Previenen que un módulo o recurso se cargue si se cumplen ciertas condiciones, como si el usuario no está autenticado. Esto es útil para mejorar el rendimiento y la seguridad.

   **Ejemplo**:
   - Un guard que impida la carga de un módulo completo de administración si el usuario no está autenticado.

### Implementación

En frameworks como Angular, los guards son implementados como clases que implementan interfaces específicas. Por ejemplo, un guard de autenticación podría verse así:

```javascript
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
```

### Resumen

Los guards son fundamentales para gestionar la seguridad y la experiencia del usuario en aplicaciones web. Permiten controlar el flujo de navegación, asegurando que los usuarios solo accedan a las secciones de la aplicación que están autorizados a ver, mejorando así tanto la seguridad como la usabilidad.
