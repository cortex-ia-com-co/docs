# UnoSportClub Documentation (Antora)

Este repositorio contiene la documentación oficial del proyecto UnoSportClub, implementada utilizando Antora como sistema de documentación.

[![Built with Antora](https://img.shields.io/badge/Built%20with-Antora-brightgreen.svg)](https://antora.org/)

## Estructura

La documentación está organizada en múltiples proyectos independientes:

```
docs/
├── antora-playbook.yml          # Playbook principal (todos los proyectos)
├── playbooks/                   # Playbooks individuales por proyecto
│   ├── user-playbook.yml
│   ├── operator-playbook.yml
│   ├── admin-playbook.yml
│   ├── superuser-playbook.yml
│   ├── implementation-playbook.yml
│   └── developer-playbook.yml
├── user/                        # Manual de Usuario
│   ├── antora.yml
│   └── modules/ROOT/
│       ├── nav.adoc
│       └── pages/
│           └── index.adoc
├── operator/                    # Manual del Operador
│   ├── antora.yml
│   └── modules/ROOT/
│       ├── nav.adoc
│       └── pages/
│           └── index.adoc
├── admin/                       # Manual del Administrador
│   ├── antora.yml
│   └── modules/ROOT/
│       ├── nav.adoc
│       └── pages/
│           └── index.adoc
├── superuser/                   # Manual del Super Usuario
│   ├── antora.yml
│   └── modules/ROOT/
│       ├── nav.adoc
│       └── pages/
│           └── index.adoc
├── implementation/              # Manual de Implementación
│   ├── antora.yml
│   └── modules/ROOT/
│       ├── nav.adoc
│       └── pages/
│           └── index.adoc
└── developer/                  # Manual del Desarrollador
    ├── antora.yml
    └── modules/ROOT/
        ├── nav.adoc
        └── pages/
            └── index.adoc
```

## Comandos

### Construir todos los proyectos juntos

```bash
npm run build:local
```

### Construir proyectos individuales

```bash
npm run build:user           # Manual de Usuario
npm run build:operator       # Manual del Operador
npm run build:admin          # Manual del Administrador
npm run build:superuser      # Manual del Super Usuario
npm run build:implementation # Manual de Implementación
npm run build:developer     # Manual del Desarrollador
npm run build:all           # Construir todos los proyectos por separado
```

### Previsualizar proyectos individuales

Cada proyecto se puede previsualizar de forma independiente en puertos diferentes:

```bash
npm run preview:user          # http://localhost:8080
npm run preview:operator      # http://localhost:8081
npm run preview:admin         # http://localhost:8082
npm run preview:superuser     # http://localhost:8083
npm run preview:implementation # http://localhost:8084
npm run preview:developer    # http://localhost:8085
```

### Previsualizar todos los proyectos juntos

```bash
npm run preview
```

La documentación se generará en `build/` con subdirectorios separados para cada proyecto.

## Formato

La documentación está escrita en AsciiDoc. Para más información sobre Antora, visita https://antora.org

## Proyectos

Cada manual es un proyecto completamente independiente de Antora:

- **user**: Manual de Usuario - Documentación para usuarios finales
- **operator**: Manual del Operador - Documentación para operadores del día a día
- **admin**: Manual del Administrador - Documentación para administradores del sistema
- **superuser**: Manual del Super Usuario - Documentación para super usuarios con acceso completo
- **implementation**: Manual de Implementación - Guía de instalación y configuración
- **developer**: Manual del Desarrollador - Documentación técnica y de desarrollo

Cada proyecto puede ser construido, desplegado y servido de forma completamente independiente.
# docs
