import { Box, Stack, } from '@mui/material';
import { ReactNode } from 'react';

type componentsReact = {
    children: ReactNode
}

export default function BackgroundLogin({ children } : componentsReact){
    
    return (
        <Stack direction="row" display='flex' justifyContent="center">
        <Box 
            component="img"
            src='/victor_background.png'
            sx={{
                width: 'auto',
                height: 'auto',
                position: 'absolute',
                top: -342.5,
                left: -320,
                zIndex: 0,
                scale: 0.5,
            }}/> 
        <Box component="img" src='/logo.png' sx={{position: 'absolute', width: '15vw', 
            height: 'auto', top: 10, left: 0
            }}/>
        <Stack sx={{backgroundColor: "#4183ff", width: '65vw', height: "100vh", zIndex: 1, position: 'relative', 
            m: -4, p: 0, ml: 39,
            clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)', display: 'flex', justifyContent: "center", 
            alignItems: "center", 
            }}>
               {children} 
            </Stack>
            </Stack>
    )
}