import supabase from './supabase';

const getRandomWord = async () => {
  const { data, error } = await supabase.rpc('get_random_word');

  return data[0].value;
};

export default { getRandomWord };
