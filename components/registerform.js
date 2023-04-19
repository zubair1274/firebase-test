import Input from "./UI/Input";
import { useState,useEffect} from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthUserContext";
import { useForm } from "react-hook-form";

function Registrationform() {
    const { register, handleSubmit, watch,getValues, formState: { errors } } = useForm();
    const [confirmPass, setConfirmPass] = useState(null);
    const [invalidPass,setInvalidPass] = useState(null)
    const [error, setError] = useState(null);
    const router = useRouter();
    const { userRegistration } = useAuth();

    const onSubmit = data => {
      if(getValues('password')==getValues('crf-password')){
        userRegistration(data.name,data.email, data.password)
        .then(res => {
       console.log(res)
        })
        .catch(error => {
      setError(error.message)
        });
      }
    };
    useEffect(() => {
      if(getValues('password')!==getValues('crf-password')){
        setInvalidPass("Provided Password did not match")
      }else{
        setInvalidPass(null)
      }
      
    }, [confirmPass])
    

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Create and account
      </h1>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Input
          // value={email}
          labelText={"Your Name"}
          labelFor={"Name"}
          id={"name"}
          name={"name"}
          type={"text"}
          isRequired={true}
          registerfeild={...register("name")}
          placeholder={"Full Name"}
        />
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
          handleChange={e=>setConfirmPass(e.target.value)}
          isRequired={true}
          registerfeild={...register("password")}
          placeholder={"••••••••"}
        />
        <Input
            handleChange={e=>setConfirmPass(e.target.value)}
          // value={password}
          labelText={"Confirm Password"}
          labelFor={"Confirm Password"}
          id={"crf-password"}
          name={"crf-password"}
          type={"password"}
      
          invalid={invalidPass}
          isRequired={true}
          registerfeild={...register("crf-password")}
          placeholder={"••••••••"}
        />

        <button
          type="submit"
          className="w-full text-white bg-[#2563eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Create an account
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login here
          </a>
        </p>
      </form>
    </div>
  );
}

export default Registrationform;
