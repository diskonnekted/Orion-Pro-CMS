import { pool } from '@/lib/db';
import OrionPromoHome from '@/components/themes/orion-promo/Home';
import SmartVillageHome from '@/components/themes/smartvillage/Home';
import OrionSchoolHome from '@/components/themes/orion-school/Home';
import OrionPortfolioHome from '@/components/themes/orion-portfolio/Home';
import OrionEWSProHome from '@/components/themes/orion-ews-pro/Home';
import OrionLoadScannerHome from '@/components/themes/orion-load-scanner/Home';
import OrionSmarthomeHome from '@/components/themes/orion-smarthome/Home';
import OrionSmartparkHome from '@/components/themes/orion-smartpark/Home';
import OrionWeatherHome from '@/components/themes/orion-weather/Home';
import OrionLivecamHome from '@/components/themes/orion-livecam/Home';
import OrionAutomationHome from '@/components/themes/orion-automation/Home';
import OrionMachineMonitorHome from '@/components/themes/orion-machine-monitor/Home';
import OrionLearningHome from '@/components/themes/orion-learning/Home';

export const dynamic = 'force-dynamic';

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function getActiveTheme() {
  try {
    const [rows] = await pool.query('SELECT option_value FROM orion_options WHERE option_name = "active_theme"');
    const theme = (rows as any[])[0]?.option_value || 'orion-promo';
    console.log('DEBUG: Resolved Active Theme:', theme);
    return theme;
  } catch (e) {
    console.error('DEBUG: Error resolving theme:', e);
    return 'orion-promo';
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const theme = await getActiveTheme();
  
  if (theme === 'smartvillage') {
    return <SmartVillageHome searchParams={searchParams} />;
  }
  
  if (theme === 'orion-school') {
    return <OrionSchoolHome />;
  }

  if (theme === 'orion-portfolio') {
    return <OrionPortfolioHome />;
  }

  if (theme === 'orion-ews-pro') return <OrionEWSProHome />;
  if (theme === 'orion-load-scanner') return <OrionLoadScannerHome />;
  if (theme === 'orion-smarthome') return <OrionSmarthomeHome />;
  if (theme === 'orion-smartpark') return <OrionSmartparkHome />;
  if (theme === 'orion-weather') return <OrionWeatherHome />;
  if (theme === 'orion-livecam') return <OrionLivecamHome />;
  if (theme === 'orion-automation') return <OrionAutomationHome />;
  if (theme === 'orion-machine-monitor') return <OrionMachineMonitorHome />;
  if (theme === 'orion-learning') return <OrionLearningHome />;
  
  return <OrionPromoHome searchParams={searchParams} />;
}
