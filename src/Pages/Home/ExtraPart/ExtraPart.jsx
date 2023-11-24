

const ExtraPart = () => {
    return (
        <div className=" m-2" >
            <h1 className=" text-5xl font-bold text-center mt-3" > Top Stories </h1>
            <p className=" text-3xl font-semibold text-center mt-2 text-yellow-500" > ---- Today`s Top News --- </p>
            <div className="hero min-h-screen mt-5">


                <div className="  lg:grid grid-cols-2 gap-3 " >

                    <div>
                        <img className=" w-full h-[500px] rounded-box" src="https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2023/11/23/1.jpg?itok=strtoKHw" alt="" />
                    </div>

                    <div>
                        <h1 className=" text-4xl font-bold text-red-400" >
                        Israel-Hamas war  <br /> Mixed feelings for Gaza <br /> residents as truce starts
                          
                        </h1>

          <p className=" text-sm mt-5" >
          Ghazi Hamad, member of Hamas’s political bureau, says the group is open to negotiating to release even more civilian captives currently held in Gaza, including men.

However, in regards to Israeli soldiers held captive, Hamad told Al Jazeera, “This is another story”.

“At this phase, we are talking about the civilian hostages. Regarding others, we are looking for a comprehensive swap and exchange to release all [7,200] prisoners in Israeli detention centres. This is our goal and aim,” Hamad said.

“But we will wait and see. We have full patience, power and energy to do that … Israel must release all the prisoners, and we are ready to release the Israeli soldiers.”

          </p>
   <marquee>
    
   <h1  className=" text-green-400 text-3xl mt-5 " > Independent Palestinian Muslim nation!
 The name of Israel will disappear from the world </h1>
   </marquee>

                    </div>


                </div>



            </div>
        </div>
    );
};

export default ExtraPart;