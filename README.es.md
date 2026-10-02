<div align="center">

  <img src="docs/images/kpm_master.png" width="130" alt="Logotipo Krypton Package Manager" />

  # Krypton Package Manager (KPM) Studio
  ### Suite Moderna de Empaquetado, Compresión y Distribución Blindada para Windows

  [![Versión](https://img.shields.io/badge/versión-1.0.0-blue.svg?style=for-the-badge&logo=github)](https://github.com/devlwte/kpm-studio)
  [![Plataforma](https://img.shields.io/badge/plataforma-Windows%2010%20%7C%2011%20(64--bit)-0078D6.svg?style=for-the-badge&logo=windows)](https://github.com/devlwte/kpm-studio)
  [![Seguridad](https://img.shields.io/badge/seguridad-Bóveda%20AES--256--GCM-10B981.svg?style=for-the-badge&logo=shield)](https://github.com/devlwte/kpm-studio)
  [![Compresión](https://img.shields.io/badge/compresión-Brotli%20Ultra%20%2B%20Deflate-F59E0B.svg?style=for-the-badge&logo=speedtest)](https://github.com/devlwte/kpm-studio)
  [![Licencia](https://img.shields.io/badge/licencia-Freeware%20%26%20Distribución-purple.svg?style=for-the-badge)](LICENSE)

  <br />

  <p align="center">
    🌐 <b>Idioma:</b> <a href="README.md">English</a> | <b>Español</b>
  </p>

  <p align="center">
    <b>Krypton Package Manager (KPM)</b> es una suite completa de empaquetado, compresión y distribución de software diseñada desde cero para el ecosistema moderno de Windows. Elimina la necesidad de scripts engorrosos mediante un entorno visual intuitivo, compresión de ultra alta densidad (Brotli Ultra + Deflate 9), bóveda criptográfica militar AES-256-GCM, modo sigilo anónimo y descompresión de flujo multi-volumen al vuelo.
  </p>

  <p align="center">
    <a href="https://github.com/devlwte/kpm-studio/releases/download/v1.0.0/Krypton-Package-Manager-Setup-v1.0.0.zip">
      <img src="https://img.shields.io/badge/DESCARGAR%20INSTALADOR%20SETUP%20(ZIP)-2ea44f?style=for-the-badge&logo=windows&logoColor=white" alt="Descargar Instalador Setup" />
    </a>
  </p>

</div>

---

## 🌟 ¿Por qué KPM Studio?

Distribuir aplicaciones en Windows no debería obligarte a aprender lenguajes de scripting anticuados de los años 90, lidiar con archivos de configuración frágiles ni preocuparte por si alguien sabotea o inyecta código malicioso en tus archivos binarios.

**KPM Studio** nació para transformar esa experiencia:
- **Cero Scripts:** Genera instaladores formales de Windows o paquetes portables en segundos mediante una interfaz gráfica fluida e interactiva.
- **Compresión Extrema:** Ahorra gigabytes en lanzamientos de software, copias de seguridad e imágenes de disco crudas gracias al algoritmo Brotli Ultra.
- **Seguridad de Grado Militar:** Protege y sella tus paquetes con AES-256-GCM y derivación HKDF para impedir modificaciones no autorizadas en tránsito.
- **Privacidad Total (Modo Sigilo):** Empaqueta cualquier archivo bajo un identificador anónimo de 16 caracteres hexadecimales sin extensión para evitar escaneos automáticos invasivos.

---

## 📸 Galería Visual del Sistema

### 1. Módulo de Empaquetado (Packer Studio)
Control absoluto sobre el tipo de entrega (Instalador Setup tradicional vs Modo Portable sin instalación), origen de datos (carpetas completas vs ejecutables o archivos sueltos), perfiles de compresión y división en partes:

![Packer Studio](docs/images/01_packer_studio.png)

### 2. Extractor & Descompresor Inteligente (Installer Module)
Arrastra y suelta paquetes `.kpkg` o archivos en modo sigilo sin extensión. Visualiza telemetría en tiempo real, vinculación automática de partes secundarias y desbloqueo seguro mediante contraseña de bóveda:

![Installer Module](docs/images/02_installer_extractor.png)

### 3. Gestor del Ecosistema de Software (Ecosystem Manager)
Inspecciona tus aplicaciones instaladas, visualiza metadatos oficiales PE de Windows, ejecuta programas en 1 clic y realiza desinstalaciones limpias y nativas en el sistema operativo:

![Ecosystem Manager](docs/images/03_ecosystem_manager.png)

### 4. Guía Técnica Oficial Integrada
Incluye 10 capítulos interactivos con especificaciones del formato binario, arquitectura criptográfica, funcionamiento del streaming multi-volumen y recomendaciones de compresión:

![Official Docs](docs/images/04_official_docs_.png)

---

## ⚡ Características Principales

### 🛠️ 1. Modos de Distribución Flexibles
- **Instalador Setup Tradicional:**
  - Instala en la ruta estándar de Windows (`AppData\Local\Programs\<NombreApp>`).
  - Crea accesos directos oficiales en el Escritorio y en el Menú Inicio.
  - Registra una entrada limpia de desinstalación en el Panel de Control y en *Configuración > Aplicaciones instaladas*.
  - Validación de seguridad: en modo Setup exige un archivo binario `.exe` para evitar accesos directos rotos.
- **🚀 Modo Sin Instalación (Portable):**
  - Descomprime directamente en la carpeta que elijas sin requerir permisos de administrador.
  - **Cero registros en Windows:** No altera el Registro ni crea atajos, manteniendo el sistema operativo 100% limpio.
  - Soporta empaquetar carpetas completas, imágenes de disco crudas (`.iso`, `.img`), ejecutables sueltos o cualquier tipo de archivo.

### 🔒 2. Bóveda Criptográfica AES-256-GCM & Modo Sigilo
- **Bóveda Sellada de Extremo a Extremo:** Los encabezados y los datos comprimidos están cifrados y autenticados con AES-256-GCM, derivación de clave HKDF-SHA256 y una sal criptográfica de 32 bytes.
- **Contraseña Opcional de Bóveda:** Protege tus paquetes con una clave personalizada. El descompresor incluye un panel con candado interactivo y detección de clave requerida o incorrecta.
- **Modo Sigilo (Stealth Mode):** Produce archivos nombrados con un hash hexadecimal de 16 caracteres sin extensión (ej. `1cc8493daf2ddebd`), haciéndolos indistinguibles de datos genéricos.
- **Defensa Anti-Sabotaje (Anti-Tamper):** Modificar o corromper un solo bit del paquete provoca el rechazo inmediato por parte del tag de autenticación GCM de 16 bytes, bloqueando inyecciones de malware.

### 🗜️ 3. Compresión Dual: Brotli Ultra vs. Deflate 9
- **Brotli Ultra (Nivel 11):** Máxima reducción para software masivo e imágenes de disco sin comprimir (**`.iso` y `.img`**), alcanzando más del **99% de ahorro** en sectores redundantes.
- **Deflate 9 (Rápido):** Optimizado para máxima velocidad de lectura y escritura. Ideal para paquetes que ya contienen datos comprimidos (`.zip`, `.rar`, `.7z`) sin sobrecargar la CPU.

### 📦 4. Streaming Multi-Parte con Auto-Redirección Inteligente
- Divide paquetes de gran tamaño en volúmenes configurables (ej. 25 MB, 100 MB, 500 MB, 2 GB, 4 GB) con extensión `.partX.kpkg` o nombres en modo sigilo.
- **Streaming Directo en Memoria:** Concatena los flujos al vuelo sin crear archivos temporales gigantescos en el disco duro del usuario.
- **Auto-Redirección:** Si el usuario arrastra la *Parte 2* o *Parte 3* a la ventana, el motor localiza automáticamente la *Parte 1* en la misma carpeta para iniciar el proceso sin confusiones.

### 🛡️ 5. Blindaje en Bytecode V8 de Producción
- Todo el motor de empaquetado KPKG y el backend de Electron están compilados directamente en **Código Máquina Bytecode V8 (.jsc)** mediante Bytenode.
- **Cero código fuente expuesto:** La distribución final no incluye archivos JavaScript en texto plano, protegiendo al 100% los algoritmos propietarios.

---

## 📥 Instalación & Uso

### Instalador Oficial de Windows (Recomendado)
1. Descarga el archivo [**Krypton-Package-Manager-Setup-v1.0.0.zip**](https://github.com/devlwte/kpm-studio/releases/download/v1.0.0/Krypton-Package-Manager-Setup-v1.0.0.zip) desde la sección oficial de [Releases](https://github.com/devlwte/kpm-studio/releases/tag/v1.0.0).
2. Descomprime el archivo `.zip`.
3. Ejecuta `Krypton Package Manager Setup 1.0.0.exe` y sigue las instrucciones del asistente.

---

## 📐 Especificación del Formato Binario KPKG v2

| Desplazamiento / Tamaño | Campo | Descripción |
|---|---|---|
| `0x00 - 0x04` (5 bytes) | **Magic Header** | `"KPKG\x02"` (Identificador de Bóveda v2) |
| `0x05` (1 byte) | **Flags de Bóveda** | `0x01` Encrypted, `0x02` MultiPart, `0x04` Password |
| `0x06` (1 byte) | **Compression ID** | `0x01` Deflate 9, `0x02` Brotli Ultra |
| `0x07 - 0x26` (32 bytes)| **Salt Criptográfico** | Sal aleatoria para derivación segura HKDF |
| `0x27 - 0x2E` (8 bytes) | **Part & Chunk Info** | Número de volumen (uint16) y tamaño de bloque (MB) |
| `0x2F - 0x3A` (12 bytes)| **Metadata IV** | Vector de inicialización AES-GCM del encabezado |
| `0x3B - 0x4A` (16 bytes)| **Metadata Tag** | Tag de autenticación criptográfica GCM del manifiesto |
| `0x4B - 0x4E` (4 bytes) | **Metadata Length** | Longitud uint32LE del JSON de metadatos cifrado |
| `0x4F - N` | **Ciphertext Envelope**| JSON de metadatos autenticado y cifrado |
| `N+1 - N+12` (12 bytes) | **Payload IV** | Vector de inicialización para el flujo de datos |
| `N+13 - EOF-24` | **Compressed Payload** | Bloques de datos comprimidos y cifrados |
| `EOF-24 - EOF-8` (16 B) | **Payload Tag** | Tag GCM de autenticación global del payload |
| `EOF-8 - EOF` (8 bytes) | **Trailer Magic** | `"KPKGTRL2"` (Validación de cierre de contenedor) |

---

## 📄 Licencia y Términos de Distribución

Krypton Package Manager Studio se distribuye bajo la **Licencia de Software Gratuito y Distribución Krypton (KPM License)**.

- **Libre Distribución:** Eres libre de descargar, utilizar, compartir, alojar en servidores espejo (mirrors) y redistribuir copias exactas e inalteradas de los binarios e instaladores oficiales tanto para uso personal como comercial.
- **Integridad del Código:** Queda estrictamente prohibida la ingeniería inversa, descompilación, desensamblado, modificación no autorizada o comercialización de los binarios como producto de pago.

Para consultar los términos legales completos, revisa el archivo [LICENSE](LICENSE) (disponible en inglés y español).

---

<p align="center">
  Creado con pasión para la comunidad de desarrolladores de Windows por <b>KyrnForge / devlwte</b> (2026).
</p>
