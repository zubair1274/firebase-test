
import Input from './UI/Input'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthUserContext';
import { useForm } from "react-hook-form";

function Loginform() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();


  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
    .then(authUser => {
      router.push('/dashboard');
    })
    .catch(error => {
  setError(error?.message)
    });
 
  };


  return (
    <div><form  className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)} >
         { error  &&<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Error</span> {error}
</div>}
          <Input 
 
          // value={email} 
          labelText={"Your email"} 
          labelFor={"email"} 
          id={"email"} 
          name={"email"} 
          type={"email"} 
          isRequired={true} 
          registerfeild={...register("email")}
          
          placeholder={"name@company.com"} 
          />
    <Input 
          // value={password} 
          labelText={"Password"} 
          labelFor={"password"} 
          id={"password"} 
          name={"password"} 
          type={"password"} 
          isRequired={true} 
          registerfeild={...register("password")}
          placeholder={"••••••••"} 
          />

    <button type="submit" className="w-full text-white bg-[#2563eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
    </p>
</form></div>
  )
}

export default Loginform