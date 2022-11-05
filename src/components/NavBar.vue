<template>
    <div className="bg-color py-2">
      <div className="container-wrapper flex item-center justify-between text-white border-bottom py-4">
        <div className="flex items-center justify-between ">
          <div className="px-2">
            <button
            >
              <div className="w-4 h-0.5 bg-white mb-1"></div>
              <div className="w-4 h-0.5 bg-white mb-1"></div>
              <div className="w-4  h-0.5 bg-white"></div>
            </button>
          </div>
       
            <div className="text-lg uppercase font-semibold">
              Balance :<span className="font-color text-lg ml-2">$78,556</span>
            </div>
      
        </div>
        <div className="flex items-center justify-between ">
          <div className="mx-2">
            <NavLink
            
              to="#"
              className="btn border-col font-color-blue  px-6 py-2 rounded-full text-lg font-semibold hover:text-white"
            >
              Daily
            </NavLink>
          </div>
          <div className="mx-2">
            <NavLink
              to="#"
              className="  btn border-col font-color-blue  px-6 py-2 rounded-full text-lg font-semibold hover:text-white "
            >
              Week
            </NavLink>
          </div>

          <div className="mx-2">
            <router-link
           
              to="#"
              className="btn border-col font-color-blue  px-6 py-2 rounded-full text-lg font-semibold hover:text-white "
            >
              Month
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>