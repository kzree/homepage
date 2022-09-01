import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import { Button } from '@components/common/button';
import { ThemeColor } from '@enum/ThemeColor';

const Home: NextPage = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <Button variant={ThemeColor.Primary} size="md" onClick={() => setTheme('dark')}>
        Light Mode
      </Button>
    </div>
  );
};

export default Home;
