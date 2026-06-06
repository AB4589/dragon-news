const Register = () => {
    return (
        <div>
             <div>
             <div class="mt-10 sm:mx-auto lg-w-full sm:w-full sm:max-w-sm lg:max-w-2xl bg-[#fff] px-24 py-36">
            <h2 className="text-4xl text-[#403F3F] text-center">Register your account</h2>
            <div className="border-1 border-[#E7E7E7]  my-12">

            </div>
    <form action="#" method="POST" class="space-y-6">
      <div>
        <label for="name" class="block text-sm/6 text-2xl font-semibold text-[#403F3F]">Your Name</label>
        <div class="mt-2">
          <input id="name" type="text" name="name" required autocomplete="name" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>
      <div>
        <label for="photoUrl" class="block text-sm/6 text-2xl font-semibold text-[#403F3F]">Photo URL</label>
        <div class="mt-2">
          <input id="photoUrl" type="url" name="photoUrl" required autocomplete="url" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <label for="photoUrl" class="block text-sm/6 text-2xl font-semibold text-[#403F3F]">Email</label>
        <div class="mt-2">
          <input id="email" type="email" name="email" required autocomplete="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-[#403F3F]">Password</label>
        </div>
        <div class="mt-2">
          <input id="password" type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>
      <div>
        <input type="checkbox" className="mr-2"/>Accept Term & Conditions
      </div>
         <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-[#403F3F] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
      </div>
    </form>

  </div>
        </div>
        </div>
    );
};

export default Register;