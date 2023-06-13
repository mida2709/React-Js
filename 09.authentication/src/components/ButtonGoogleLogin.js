import { GoogleLogin } from "@react-oauth/google"
import { useLocalStorage } from '../hooks/LocalStorage'

export const ButtonGoogleLogin = () => {
    const [, setCredentialStorage] = useLocalStorage('credential')
    const onCredentialSucces = (response) => {
        setCredentialStorage(response.credential)
    }
    const onCredentialError = (error) => {
        console.log(error)

    }
    return (
        <div>
            <GoogleLogin onSuccess={onCredentialSucces} onError={onCredentialError}>

            </GoogleLogin>
        </div>
    )
}