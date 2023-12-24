import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

export function HeaderBar() {
    return (
        <div className='header-wrapper'>
            <h1 id='app-name'>REST ASSURED</h1>
            <div className='header-icons'>
                <NotificationsIcon/>
                <AccountCircleIcon/>
                <SettingsIcon/>
            </div>
        </div>
    )
}