# Tema PDF para Documentación

Este directorio contiene el tema personalizado para la generación de PDFs basado en el ejemplo de CAPSI UCP.

## Archivo de Tema

- `pdf-theme.yml`: Archivo de configuración del tema PDF

## Estructura de Imágenes

El tema hace referencia a las siguientes imágenes que deben estar en `pdf-resources/pdf-themes/pdf-resources/images/`:

- `cover.png` - Portada frontal del PDF
- `back.png` - Portada trasera del PDF
- `background-recto.jpg` - Fondo de páginas recto (páginas impares)
- `background-verso.jpg` - Fondo de páginas verso (páginas pares)
- `title.png` - Fondo de la página de título
- `logo.png` - Logo que aparece en la página de título

## Configuración

El tema está configurado en `antora-playbook.yml` mediante los atributos:

```yaml
pdf-theme: pdf-theme.yml
pdf-themesdir: pdf-resources/pdf-themes
```

## Características del Tema

- **Tamaño de página**: Letter (carta)
- **Orientación**: Portrait (vertical)
- **Márgenes**: 1 pulgada
- **Fuente**: Noto Serif
- **Tamaño de fuente**: 12pt
- **Indentación**: 1.5 pulgadas
- **Encabezados H1 y H2**: Centrados
- **Encabezados H3-H5**: Alineados a la izquierda

## Notas

- Las imágenes son opcionales. Si no existen, el PDF se generará sin ellas.
- El tema extiende el tema `default` de Asciidoctor PDF.
- Para personalizar fuentes, descomenta y configura la sección `font` en el archivo `pdf-theme.yml`.


