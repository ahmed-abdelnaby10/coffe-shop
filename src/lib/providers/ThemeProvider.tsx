'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from '@/lib/rtk';
import getLPTheme from '@/themes/theme';

export function Theme({children}:{children:React.ReactNode}) {
    const { mode } = useSelector(state => state.themeMode)
    const LPtheme = createTheme(getLPTheme(mode));

    return (
        <ThemeProvider theme={LPtheme}>
            {children}
        </ThemeProvider>
    )
}