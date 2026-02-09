import { pool } from '@/lib/db';

export async function ensureIoTTable() {
  const connection = await pool.getConnection();
  try {
    // Table for IoT Devices
    await connection.query(`
      CREATE TABLE IF NOT EXISTS orion_iot_devices (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        type VARCHAR(50) DEFAULT 'esp32',
        token VARCHAR(100) NOT NULL UNIQUE,
        status ENUM('active', 'inactive', 'maintenance') DEFAULT 'active',
        last_seen TIMESTAMP NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);

    // Table for Telemetry Data
    await connection.query(`
      CREATE TABLE IF NOT EXISTS orion_iot_telemetry (
        id BIGINT AUTO_INCREMENT PRIMARY KEY,
        device_id INT NOT NULL,
        data JSON NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (device_id) REFERENCES orion_iot_devices(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    `);
    
    console.log('IoT tables checked/created successfully');
  } catch (error) {
    console.error('Failed to init IoT tables:', error);
    throw error;
  } finally {
    connection.release();
  }
}
