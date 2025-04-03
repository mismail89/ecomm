import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userslice';
export default function oauth() {
    const dispatch = useDispatch();
    const handlegoogleclick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider); // Corrected usage
            const res = await fetch('http://localhost:500/api/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Name: result.user.displayName,
                    Email: result.user.email,
                    Photo: result.user.photoURL
                }),
            });
            const data = await res.json();
            dispatch(signInSuccess(data));
            console.log(data)
        } catch (error) {
            console.log("Could not login with Google:", error);
        }
    }

  return (
    <button type='button' onClick={handlegoogleclick} className=' top-4 py-4 px-10 rounded-sm bg-purple-600 text-white uppercase'>Continue with Google</button>
  )
}
