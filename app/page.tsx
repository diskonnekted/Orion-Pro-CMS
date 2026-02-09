import { pool } from '@/lib/db';
import OrionPromoHome from '@/components/themes/orion-promo/Home';
import SmartVillageHome from '@/components/themes/smartvillage/Home';

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function getActiveTheme() {
  try {
    const [rows] = await pool.query('SELECT option_value FROM orion_options WHERE option_name = "active_theme"');
    return (rows as any[])[0]?.option_value || 'orion-promo';
  } catch (e) {
    return 'orion-promo';
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const theme = await getActiveTheme();
  
  if (theme === 'smartvillage') {
    return <SmartVillageHome searchParams={searchParams} />;
  }
  
  return <OrionPromoHome searchParams={searchParams} />;
}
