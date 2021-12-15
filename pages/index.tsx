import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { locale, locales, defaultLocale } = useRouter();

  return (
    <ul>
      <li>Locale: {locale}</li>
      <li>Locales: {locales?.join(', ')}</li>
      <li>Default Locale: {defaultLocale}</li>
    </ul>
  );
};

export default Home;
