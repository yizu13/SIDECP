import { useSettingContext } from '../settingsComponent/contextSettings';
import BackgroundLogin from './Background';
import Loginform from './LoginForm';



export default function Login(){
    const settings = useSettingContext()
    const {theme, themefunc} = settings;

      themefunc(false);
      window.electronTheme.setTheme(theme.palette.mode);
      window.windowAPI.setFullscreen(false);
      window.windowAPI.resizeWindow(980, 720);

    console.log('hola')

    return (
      
      <BackgroundLogin>
        <Loginform/>
      </BackgroundLogin>

    )
}

