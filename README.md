<div align="center">

  <img src="docs/images/kpm_master.png" width="130" alt="Krypton Package Manager Logo" />

  # Krypton Package Manager (KPM) Studio
  ### Creador Profesional de Instaladores Modernos & Contenedores Portables Blindados

  [![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge&logo=github)](https://github.com/devlwte/kpm-studio)
  [![Platform](https://img.shields.io/badge/platform-Windows%2010%20%7C%2011%20(64--bit)-0078D6.svg?style=for-the-badge&logo=windows)](https://github.com/devlwte/kpm-studio)
  [![Security](https://img.shields.io/badge/security-AES--256--GCM%20Vault-10B981.svg?style=for-the-badge&logo=shield)](https://github.com/devlwte/kpm-studio)
  [![Bytecode](https://img.shields.io/badge/engine-V8%20Bytecode%20Protected-8B5CF6.svg?style=for-the-badge&logo=v8)](https://github.com/devlwte/kpm-studio)
  [![Compression](https://img.shields.io/badge/compression-Brotli%20Ultra%20%2B%20Deflate-F59E0B.svg?style=for-the-badge&logo=speedtest)](https://github.com/devlwte/kpm-studio)
  [![License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)](LICENSE)

  <br />

  <p align="center">
    <b>Krypton Package Manager (KPM)</b> es una suite de empaquetado y distribución de software de última generación diseñada para desarrolladores de Windows. Reemplaza herramientas anticuadas con una arquitectura de compresión ultra-avanzada (Brotli Ultra + Deflate 9), streaming multi-volumen continuo sin archivos temporales, bóveda criptográfica AES-256-GCM y modo sigilo anónimo.
  </p>

  <p align="center">
    <a href="https://github.com/devlwte/kpm-studio/releases/download/v1.0.0/Krypton-Package-Manager-Setup-v1.0.0.zip">
      <img src="https://img.shields.io/badge/DESCARGAR%20INSTALADOR%20SETUP%20(ZIP)-2ea44f?style=for-the-badge&logo=windows&logoColor=white" alt="Descargar Instalador" />
    </a>
  </p>
</div>

---

## 📸 Galería Visual del Sistema

### 1. Módulo de Empaquetado (Packer Studio)
Control total sobre el tipo de distribución (Instalador Setup vs Portable sin instalación), origen de contenido (Carpetas completas vs Archivos/.EXE sueltos), perfiles de compresión y división en partes:

![Packer Studio](docs/images/01_packer_studio.png)

### 2. Extractor & Descompresor Inteligente (Installer Module)
Arrastra y suelta paquetes `.kpkg` o archivos en modo sigilo sin extensión. Incluye telemetría de descompresión de flujo en tiempo real, auto-redirección de volúmenes secundarios y desbloqueo seguro de clave:

![Installer Module](docs/images/02_installer_extractor.png)

### 3. Gestor del Ecosistema de Software (Ecosystem Manager)
Administración integral de aplicaciones instaladas, visualización de metadatos PE oficiales, ejecución directa en 1 clic y desinstalación limpia nativa:

![Ecosystem Manager](docs/images/03_ecosystem_manager.png)

### 4. Manual Técnico Oficial Integrado (Documentation Guide)
10 módulos de documentación técnica exhaustiva, incluyendo especificaciones binarias, guías de seguridad criptográfica y comportamiento de compresión:

![Official Docs](docs/images/04_official_docs.png)

---

## ⚡ Características Principales

### 🛠️ 1. Modos de Distribución Flexibles
- **Instalador Setup Tradicional:**
  - Instala en `AppData\Local\Programs\<AppName>`.
  - Crea accesos directos oficiales en el Escritorio y en el Menú Inicio.
  - Registra un desinstalador oficial en el Panel de Control y en Windows Add/Remove Programs.
  - Validación estricta: en modo Setup exige que los archivos individuales sean binarios `.exe` para evitar accesos directos rotos en Windows.
- **🚀 Sin Instalación (Modo Portable):**
  - Descomprime directamente en la carpeta elegida (por defecto al lado del paquete original).
  - **Cero registros en Windows:** No altera el Registro, ni crea atajos, manteniendo el sistema 100% limpio.
  - Permite empaquetar cualquier tipo de archivo, documento, ejecutable suelto o directorio completo.

### 🔒 2. Bóveda Criptográfica AES-256-GCM & Modo Sigilo
- **Cifrado de Extremo a Extremo:** Encabezados y bloques de datos protegidos con AES-256-GCM y derivación de clave HKDF-SHA256 con sal aleatoria de 32 bytes.
- **Protección con Clave Opcional:** Puedes proteger tus paquetes con una contraseña personalizada de bóveda. El instalador incluye un panel con candado interactivo y detección de clave requerida / errónea.
- **Modo Sigilo (Stealth Mode):** Genera archivos empaquetados nombrados con un hash criptográfico determinista de 16 caracteres hexadecimales sin la extensión `.kpkg` (ej. `a247c1011049eb9d`), haciéndolos indistinguibles de archivos anónimos.
- **Defensa Anti-Tamper:** Modificar o corromper un solo bit del paquete hace que el *Authentication Tag* GCM de 16 bytes detecte la alteración al instante y aborte la extracción, impidiendo ataques de inyección de código.

### 🗜️ 3. Compresión Dual: Brotli Ultra vs Deflate 9
- **Brotli Ultra (Nivel 11):** Máxima reducción para software masivo e imágenes de disco sin comprimir (**`.iso` e `.img`**), alcanzando más del **99% de reducción** en sectores crudos redundantes.
- **Deflate 9 (Rápido):** Optimizado para empaquetado ultrarrápido y recomendado para archivos precomprimidos (`.zip`, `.rar`, `.7z`), evitando sobrecargar la CPU innecesariamente.

### 📦 4. División Multi-Parte con Auto-Redirección Inteligente
- Divide paquetes gigantes en volúmenes configurables (ej. 50 MB, 500 MB, 2 GB) con extensión `.partX.kpkg` o hashes en modo sigilo.
- **Streaming al Vuelo:** Concatena los flujos de lectura sin crear archivos temporales gigantescos en el disco duro del usuario.
- **Auto-Redirección:** Si el usuario suelta la Parte 2 o Parte 3 en la ventana, el motor localiza automáticamente la Parte 1 maestra en la misma carpeta para iniciar el proceso.

### 🛡️ 5. Blindaje del Código en Producción (Bytecode V8)
- Todo el núcleo del motor KPKG y los procesos principales de Electron están compilados directamente a **Código Máquina Bytecode V8 (.jsc)** mediante Bytenode.
- **0 archivos fuente en texto plano:** No existen archivos `.js` del motor legibles en la distribución final, previniendo la ingeniería inversa y el robo de propiedad intelectual.

---

## 📥 Instalación & Ejecución

### Opción 1: Instalador Oficial de Windows (Recomendada)
1. Descarga el archivo [**Krypton-Package-Manager-Setup-v1.0.0.zip**](https://github.com/devlwte/kpm-studio/releases/download/v1.0.0/Krypton-Package-Manager-Setup-v1.0.0.zip) desde la sección de Releases.
2. Descomprime el archivo `.zip`.
3. Ejecuta `Krypton Package Manager Setup 1.0.0.exe` y sigue el asistente de instalación.

### Opción 2: Ejecución Portátil desde este Repositorio
Si clonaste este repositorio:
1. Haz doble clic en el archivo **`INICIAR_KPM.bat`**.
2. O manualmente desde la terminal:
   ```bash
   cd app
   npm install --omit=dev
   npx electron .
   ```

---

## 📐 Especificación del Formato Binario KPKG v2

| Offset / Tamaño | Campo | Descripción |
|---|---|---|
| `0x00 - 0x04` (5 bytes) | **Magic Header** | `"KPKG\x02"` (Identificador de Bóveda v2) |
| `0x05` (1 byte) | **Flags de Bóveda** | `0x01` Encrypted, `0x02` MultiPart, `0x04` Password |
| `0x06` (1 byte) | **Compression ID** | `0x01` Deflate 9, `0x02` Brotli Ultra |
| `0x07 - 0x26` (32 bytes)| **Salt Criptográfico** | Sal aleatoria única para derivación HKDF |
| `0x27 - 0x2E` (8 bytes) | **Part & Chunk Info** | Número de volumen y tamaño de bloque (MB) |
| `0x2F - 0x3A` (12 bytes)| **Metadata IV** | Vector de inicialización AES-GCM del encabezado |
| `0x3B - 0x4A` (16 bytes)| **Metadata Tag** | Tag de autenticación criptográfica GCM |
| `0x4B - 0x4E` (4 bytes) | **Metadata Length** | Longitud uint32LE del manifiesto cifrado |
| `0x4F - N` | **Ciphertext Envelope**| JSON de metadatos cifrado con AES-256-GCM |
| `N+1 - N+12` (12 bytes) | **Payload IV** | Vector de inicialización del flujo de datos |
| `N+13 - EOF-24` | **Compressed Payload** | Bloques comprimidos y cifrados |
| `EOF-24 - EOF-8` (16 B) | **Payload Tag** | Tag GCM de autenticación global del payload |
| `EOF-8 - EOF` (8 bytes) | **Trailer Magic** | `"KPKGTRL2"` (Validación de cierre íntegro) |

---

## 🔒 Verificación de Integridad Criptográfica

Todos los archivos distribuidos cuentan con firmas SHA-256 oficiales en [CHECKSUMS.sha256](CHECKSUMS.sha256). Puedes verificar cualquier archivo en PowerShell con:

```powershell
Get-FileHash -Algorithm SHA256 "app\engine.jsc"
```

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

Desarrollado con pasión por **KyrnForge / devlwte** (2026).
