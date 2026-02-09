import { getDevices } from './actions';
import { ensureIoTTable } from '@/lib/iot/db';
import Link from 'next/link';
import { deleteDevice } from './actions';

// Simple Submit Button for Delete
function DeleteButton() {
  return (
    <button 
      type="submit" 
      className="text-red-500 hover:text-red-700 text-sm font-medium"
    >
      Delete
    </button>
  );
}

export default async function IoTPage() {
  // Ensure tables exist
  await ensureIoTTable();
  
  const devices = await getDevices();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">IoT Device Manager</h1>
        <div className="flex gap-3">
          <Link 
            href="/admin/iot/manual" 
            className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition"
          >
            📖 Connection Guide
          </Link>
          <Link 
            href="/admin/iot/new" 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            + Add New Device
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 uppercase font-medium">
            <tr>
              <th className="px-6 py-4">Device Name</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Token</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Last Seen</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {devices.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                  No devices found. Click "Add New Device" to get started.
                </td>
              </tr>
            ) : (
              devices.map((device) => (
                <tr key={device.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{device.name}</td>
                  <td className="px-6 py-4 text-slate-500">{device.type}</td>
                  <td className="px-6 py-4">
                    <code className="bg-slate-100 px-2 py-1 rounded text-xs font-mono select-all">
                      {device.token}
                    </code>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      device.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {device.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {device.last_seen ? new Date(device.last_seen).toLocaleString() : 'Never'}
                  </td>
                  <td className="px-6 py-4">
                    <form action={deleteDevice}>
                      <input type="hidden" name="id" value={device.id} />
                      <DeleteButton />
                    </form>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
