# Orion Pro CMS

Orion Pro is a modern, dynamic CMS built with **Next.js 15**, **MySQL**, and **Tailwind CSS**. It features a robust theme system, plugin architecture, and IoT integration capabilities.

## 🚀 Recent Updates (February 2026)

### 1. Orion EWS Pro Theme (Disaster Early Warning System)
A specialized theme for disaster monitoring and public awareness.
- **Real-time Monitoring**: Dashboard for Flood (Ultrasonic), Earthquake (Vibration), and Landslide (Gyroscope) sensors.
- **Weather Page**: Integrated with **BMKG API** to display real-time extreme weather alerts and a dynamic **Highcharts Map** of Indonesia.
- **Alert System**: Visual warning signals based on sensor thresholds.
- **Public Education**: Dedicated sections for disaster preparedness information.

### 2. IoT Device Management Enhancements
The Admin Panel (`/admin/iot`) has been significantly upgraded:
- **Project Association**: Devices can now be assigned to specific themes (e.g., Orion EWS Pro, Smart Village).
- **Dynamic Sensor Config**: JSON-based configuration allows defining custom sensors (Key, Label, Unit, Type) per device.
- **Preset Configurations**: Auto-populate sensor configs based on the selected project type.
- **Edit Capability**: Full CRUD support for IoT devices, including editing existing configurations.

### 3. Orion Learning Theme
A theme focused on educational content (e.g., Screen Printing Workshop).
- **Registration Flow**: Dedicated registration page (`/register`) replacing the default login link for students.
- **Lesson Page**: Sidebar navigation for curriculum content (`/learn`).
- **Visuals**: Integrated assets for step-by-step guides.

### 4. Smart Village Theme
- **IoT Integration**: Connected to `orion_iot_telemetry` for real-time agricultural monitoring.
- **Dashboard**: Visualizes temperature, humidity, and soil moisture data.

## 🛠 Features

- **Dynamic Theme System**: Switch frontend themes instantly via Admin Panel (DB-driven).
- **Plugin Architecture**: Enable/Disable features like Smart Farm IoT via database.
- **Role-Based Access**: Admin and User roles with capability management.
- **Next.js Server Actions**: Secure and efficient data mutations.

## 📦 Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/diskonnekted/Orion-Pro-CMS.git
    cd orionpro
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Configure Database:
    - Update `lib/db.ts` with your MySQL credentials.
    - Run migration scripts (if available) or import the `orion_pro.sql` schema.

4.  Run Development Server:
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000).

## 📝 Configuration

- **Active Theme**: Change the `active_theme` value in `orion_options` table (or via Admin Panel).
- **IoT Devices**: Manage devices at `/admin/iot`.

## 🤝 Contribution

Feel free to submit issues and pull requests.

## 📄 License

[MIT](LICENSE)
