import { Typography } from '@mui/material';
import { useSettingContext } from '../settingsComponent/contextSettings';


export default function Dashboard(){
    const settings = useSettingContext()
        const {theme, themefunc} = settings;
        window.windowAPI.getScreenSize().then(
            (screenSize)=>{
                // size
                window.windowAPI.resizeWindow(screenSize.width, screenSize.height);
                // full screen
                window.windowAPI.setFullscreen(true);
            }
        ).catch(err =>{
            console.log("got error:", err)
        })
    
        // light Theme
        themefunc(false);
        window.electronTheme.setTheme(theme.palette.mode);
    
        return(
            <Typography/>
        )
}