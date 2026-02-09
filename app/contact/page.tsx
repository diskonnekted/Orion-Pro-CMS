import { pool } from '@/lib/db';
import OrionPromoContact from '@/components/themes/orion-promo/Contact';
import SmartVillageContact from '@/components/themes/smartvillage/Contact';

async function getActiveTheme() {
  try {
    const [rows] = await pool.query('SELECT option_value FROM orion_options WHERE option_name = "active_theme"');
    return (rows as any[])[0]?.option_value || 'orion-promo';
  } catch (e) {
    return 'orion-promo';
  }
}

export default async function ContactPage() {
  const theme = await getActiveTheme();
  
  if (theme === 'smartvillage') {
    return <SmartVillageContact />;
  }
  
  return <OrionPromoContact />;
}
