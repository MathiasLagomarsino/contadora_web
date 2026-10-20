# Cambios solicitados para NEXA Contadoras

Fuente: `nexa contadoras pagina.docx`, texto de anotaciones y 23 capturas de referencia. Las capturas sin una instrucción acompañante se consideran contexto. Los issues contienen los criterios de aceptación y la sección de origen.

| Issue | Alcance implementado |
| --- | --- |
| [#1](https://github.com/MathiasLagomarsino/contadora_web/issues/1) | Paleta violeta, blanco y lila; logos sin contenedores rectangulares visibles. |
| [#2](https://github.com/MathiasLagomarsino/contadora_web/issues/2) | Nueva presentación de Nosotras; eliminación de Nuestra idea / Por qué existimos. |
| [#3](https://github.com/MathiasLagomarsino/contadora_web/issues/3) | Yanina Basili y Mariana Sanchez; eliminación de etiquetas de especialidad. |
| [#4](https://github.com/MathiasLagomarsino/contadora_web/issues/4) | Correo actualizado a nexacontadoras@gmail.com. WhatsApp e Instagram pendientes de confirmación. |
| [#5](https://github.com/MathiasLagomarsino/contadora_web/issues/5) | Composición geométrica decorativa en inicio; eliminación del gráfico, Tu estudio, hoy y Respuesta humana. |
| [#6](https://github.com/MathiasLagomarsino/contadora_web/issues/6) | Asesoramiento que acompaña tu próxima decisión; tarjetas sin etiquetas de público. |
| [#7](https://github.com/MathiasLagomarsino/contadora_web/issues/7) | Emprendedores en impuestos, Gestión laboral y Otras certificaciones. |
| [#8](https://github.com/MathiasLagomarsino/contadora_web/issues/8) | Gestión para emprendedores con descripción y lista solicitadas. |
| [#9](https://github.com/MathiasLagomarsino/contadora_web/issues/9) | Presentaciones pendientes reemplaza Moratorias. |
| [#10](https://github.com/MathiasLagomarsino/contadora_web/issues/10) | Abonos mensuales como título principal del bloque. |
| [#11](https://github.com/MathiasLagomarsino/contadora_web/issues/11) | Qué certificamos destacado; eliminación de Proceso simple, Sin compromiso y fecha de validez. |
| [#12](https://github.com/MathiasLagomarsino/contadora_web/issues/12) | Eliminación de orientación sin compromiso y tres beneficios bajo la solicitud. |

## Decisiones y pendientes

- Los tonos exactos y la composición geométrica son decisiones de implementación: el documento no aporta códigos de color ni un diseño sustituto.
- El issue #4 permanece abierto hasta recibir el número de WhatsApp y el perfil de Instagram definitivos. Se conservan los datos existentes; no se inventaron reemplazos.
- Se conservan Valeria Lagomarsino, los formularios, los precios y Alcance del servicio porque no existe una instrucción explícita de eliminarlos o modificarlos.
- La revisión visual detectó que la clase `h-13` no existía en la configuración de Tailwind. Los botones grandes usan ahora una altura explícita de 3.25 rem.

## Validación

- Compilación de TypeScript y Vite, generación de fallback de GitHub Pages y ESLint.
- Revisión visual en escritorio (1280 px) y móvil (390 px) de las páginas afectadas; sin errores de consola observados.
