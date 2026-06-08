import { use, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const [nameError, setNameError] = useState("");
  const {createUser, setUser, updateUser} = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    if(name.length<4){
      setNameError("Name should be at least 4 Charector");
    }
    createUser(email,password)
    .then((res)=>{
      const user = res.user;
      updateUser({displayName: name, photoUrl: photoUrl}).then(()=>
      {
        console.log("Hello")
        setUser({...user, displayName: name, photoUrl: photoUrl});
      }).catch((error)=>{
        console.log(error)
        setUser(user)
      })
      console.log(user);
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
  }
    return (
        <div>
             <div>
             <div className="mt-10 sm:mx-auto lg-w-full sm:w-full sm:max-w-sm lg:max-w-2xl bg-[#fff] px-24 py-36">
            <h2 className="text-4xl text-[#403F3F] text-center">Register your account</h2>
            <div className="border-1 border-[#E7E7E7]  my-12">

            </div>
    <form onSubmit={handleRegister} className="space-y-6">
      <div>
        <div className="mt-2">
          <input id="name" type="text" name="name" required className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
        <span className="text-red-500">{nameError}</span>
      </div>
      <div>
        <label htmlFor="photoUrl" className="block text-sm/6 text-2xl font-semibold text-[#403F3F]">Photo URL</label>
        <div className="mt-2">
          <input id="photoUrl" type="text" name="photoUrl" required  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm/6 text-2xl font-semibold text-[#403F3F]">Email</label>
        <div className="mt-2">
          <input id="email" type="email" name="email" required className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-[#403F3F]">Password</label>
        </div>
        <div className="mt-2">
          <input id="password" type="password" name="password" autoComplete="password" required className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>
      <div>
        <input type="checkbox" className="mr-2"/>Accept Term & Conditions
      </div>
         <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-[#403F3F] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
      </div>
    </form>

  </div>
        </div>
        </div>
    );
};

export default Register;