import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@components/common/button';
import { ReactComponent } from '@typings/common/react';

export const ThemeSwitcher: ReactComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const swapTheme = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'));

  return (
    <div className="pl-6">
      {mounted && (
        <Button onClick={swapTheme} className="w-20">
          {theme}
        </Button>
      )}
    </div>
  );
};
