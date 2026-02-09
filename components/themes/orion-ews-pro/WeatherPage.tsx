
'use client';

import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import { CloudRain, CloudLightning, Sun, Cloud, AlertTriangle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

// Initialize Highcharts Map module safely
if (typeof window !== 'undefined') {
  try {
    const highchartsMap = require('highcharts/modules/map');
    highchartsMap(Highcharts);
  } catch (e) {
    console.error('Failed to load Highcharts map module', e);
  }
}

const WEATHER_CODES: Record<string, { label: string; icon: any; color: string }> = {
  '0': { label: 'Cerah', icon: Sun, color: '#fbbf24' },
  '1': { label: 'Cerah Berawan', icon: Cloud, color: '#fcd34d' },
  '2': { label: 'Cerah Berawan', icon: Cloud, color: '#fcd34d' },
  '3': { label: 'Berawan', icon: Cloud, color: '#94a3b8' },
  '4': { label: 'Berawan Tebal', icon: Cloud, color: '#64748b' },
  '5': { label: 'Udara Kabur', icon: Cloud, color: '#cbd5e1' },
  '10': { label: 'Asap', icon: Cloud, color: '#94a3b8' },
  '45': { label: 'Kabut', icon: Cloud, color: '#cbd5e1' },
  '60': { label: 'Hujan Ringan', icon: CloudRain, color: '#60a5fa' },
  '61': { label: 'Hujan Sedang', icon: CloudRain, color: '#3b82f6' },
  '63': { label: 'Hujan Lebat', icon: CloudRain, color: '#2563eb' },
  '80': { label: 'Hujan Lokal', icon: CloudRain, color: '#60a5fa' },
  '95': { label: 'Hujan Petir', icon: CloudLightning, color: '#f59e0b' },
  '97': { label: 'Hujan Petir', icon: CloudLightning, color: '#f59e0b' },
};

export default function WeatherPage() {
  const [mapOptions, setMapOptions] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [extremeWeather, setExtremeWeather] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Fetch Indonesia Topology
        const topologyRes = await axios.get('https://code.highcharts.com/mapdata/countries/id/id-all.topo.json');
        const topology = topologyRes.data;

        // 2. Fetch BMKG Weather Data (Digital Forecast Indonesia)
        const weatherRes = await axios.get('https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-Indonesia.xml');
        
        const parser = new XMLParser({
          ignoreAttributes: false,
          attributeNamePrefix: "@_"
        });
        const jsonObj = parser.parse(weatherRes.data);
        
        // Parse areas
        const areas = jsonObj.data.forecast.area;
        const weatherPoints: any[] = [];
        const alerts: any[] = [];

        areas.forEach((area: any) => {
          // Get weather parameter (id="weather")
          const weatherParam = area.parameter.find((p: any) => p['@_id'] === 'weather');
          if (!weatherParam) return;

          // Get first timerange (current/next forecast)
          // BMKG timeranges are usually 0h, 6h, 12h, etc. We take the first one available.
          const currentForecast = Array.isArray(weatherParam.timerange) 
            ? weatherParam.timerange[0] 
            : weatherParam.timerange;
            
          if (!currentForecast) return;

          const weatherCode = currentForecast.value['#text'];
          const lat = parseFloat(area['@_latitude']);
          const lon = parseFloat(area['@_longitude']);
          const name = area['@_description']; // e.g. "Banda Aceh"

          // Check for extreme weather (Heavy Rain: 63, Thunderstorm: 95, 97)
          if (['63', '95', '97'].includes(weatherCode)) {
            alerts.push({
              city: name,
              code: weatherCode,
              desc: WEATHER_CODES[weatherCode]?.label || 'Cuaca Ekstrem',
              lat,
              lon
            });
          }

          // Add to map points
          weatherPoints.push({
            name: name,
            lat: lat,
            lon: lon,
            weatherCode: weatherCode,
            color: WEATHER_CODES[weatherCode]?.color || '#94a3b8',
            desc: WEATHER_CODES[weatherCode]?.label || 'Unknown'
          });
        });

        setExtremeWeather(alerts);

        // 3. Configure Highcharts Map
        setMapOptions({
          chart: {
            map: topology,
            backgroundColor: '#0f172a', // slate-900
          },
          title: {
            text: 'Peta Prakiraan Cuaca Indonesia',
            style: { color: '#e2e8f0' }
          },
          subtitle: {
            text: 'Sumber: BMKG Open Data',
            style: { color: '#94a3b8' }
          },
          mapNavigation: {
            enabled: true,
            buttonOptions: {
              verticalAlign: 'bottom'
            }
          },
          tooltip: {
            pointFormat: '{point.name}: <b>{point.desc}</b>'
          },
          series: [
            {
              name: 'Basemap',
              borderColor: '#334155',
              nullColor: '#1e293b',
              showInLegend: false
            },
            {
              type: 'mappoint',
              name: 'Cuaca Kota',
              color: '#3b82f6',
              data: weatherPoints,
              marker: {
                radius: 4,
                symbol: 'circle'
              },
              tooltip: {
                headerFormat: '',
                pointFormat: '<b>{point.name}</b><br>{point.desc}'
              }
            }
          ]
        });

        setLoading(false);

      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen font-sans text-slate-200">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <CloudLightning className="w-8 h-8 text-yellow-500" />
            Pantauan Cuaca Nasional
          </h1>
          <p className="text-slate-400">
            Prakiraan cuaca terkini di kota-kota besar Indonesia berdasarkan data BMKG.
          </p>
        </div>

        {/* Extreme Weather Alerts */}
        {extremeWeather.length > 0 && (
          <div className="mb-8 bg-orange-900/20 border border-orange-500/50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Peringatan Cuaca Ekstrem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {extremeWeather.map((alert, idx) => (
                <div key={idx} className="bg-slate-900 p-4 rounded-lg border border-slate-800 flex items-center gap-3">
                  <div className="p-2 bg-slate-800 rounded-full">
                     {alert.code === '95' || alert.code === '97' ? (
                       <CloudLightning className="w-6 h-6 text-yellow-500" />
                     ) : (
                       <CloudRain className="w-6 h-6 text-blue-500" />
                     )}
                  </div>
                  <div>
                    <div className="font-bold text-slate-200">{alert.city}</div>
                    <div className="text-sm text-orange-400">{alert.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highcharts Map */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-lg h-[600px]">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <HighchartsReact
              highcharts={Highcharts}
              constructorType={'mapChart'}
              options={mapOptions}
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
