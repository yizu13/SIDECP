import { useSettingContext } from '../settingsComponent/contextSettings';
import BackgroundLogin from './Background';
import Loginform from './LoginForm';



export default function Login(){
    const settings = useSettingContext()
    const {theme, themefunc} = settings;

    // light Theme
    themefunc(false);
    window.electronTheme.setTheme(theme.palette.mode);
    // size
    window.windowAPI.resizeWindow(980, 720);
    // full screen
    window.windowAPI.setFullscreen(false);

    return (
      
      <BackgroundLogin>
        <Loginform/>
      </BackgroundLogin>

    )
}