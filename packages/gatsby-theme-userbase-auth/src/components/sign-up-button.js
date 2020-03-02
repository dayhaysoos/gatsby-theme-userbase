/**@jsx jsx */
import { jsx, Button } from 'theme-ui';
import { useUserbase} from '../context/userbase';
import { navigate } from 'gatsby';

const SignUpButton = () => {
    return <Button onClick={() => navigate('/signup')}>Sign Up</Button>
}

export default SignUpButton;