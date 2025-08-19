import { createClient } from '@/utils/supabase/server';

export default async function Pets() {
  const supabase = await createClient();
  const { data: pets } = await supabase.from("pets").select();

  return <pre>{JSON.stringify(pets, null, 2)}</pre>
}