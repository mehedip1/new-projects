import bgImg from '../../assets/vector3.png'
import Food1 from '../../assets/biryani2.png'
import Food2 from '../../assets/biryani3.png'
import Food3 from '../../assets/biryani5.png'
import { useState } from 'react'


const imageList = [
    {
        id: 1,
        img: Food1,
    },
    
    {
        id: 2,
        img: Food2,
    },
    {
        id: 3,
        img: Food3,
    },

];

const bgImage = {
    backgroundImage : `url(${bgImg})`,
    backgroundPosition : "center",
    backgroundSize : "cover",
    backgroundRepeat : "no-repeat",
    width:"100%",
    height : "100%",
};

const Hero = () => {
    const [imageId, setImageId] = useState(Food1);

    return (
        <>
            <div style={bgImage} className='min-h-[550px] sm:min-h-[600px]
            bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center'>
            <div className='container pb-8 sm:pb-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 '>
            {/* {* text section} */}
                  <div className='flex flex-col justify-center gap-4 pt-12 sm: pt-0 text-center sm:text-left order-2 sm:order-1'>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Welcome to the Foodie zone</h1>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae soluta, suscipit vero distinctio temporibus maxime tempore fugiat labore vitae deleniti earum omnis nesciunt, dignissimos commodi neque, sapiente sint. Similique, maiores!</p>
                    <div>
                        <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200'>
                        Order Now</button>
                    </div>
                  </div>
            {/* {* img section} */}
               <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative'>
               {/* main img section */}
                  <div className='flex items-center justify-center h-[300px] sm:h-[450px] overflow-hidden'>
                  <img src={imageId} alt="" className='w-[300px] sm:w-[450px] mx-auto spin' />
                  </div>
                  {/* img list section */}
                  <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:right-10 bg-white/30 rounded-full'>
                    {
                        imageList.map((item) => (
                            <img
                                key={item.id} src={item.img}
                                className=' max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200'
                                onClick={() => {
                                    setImageId(
                                        item.id === 1 ? 
                                        Food1 : item.id === 2 ? Food2 : Food3
                                    )
                                }}
                            />
                        )
                        )



                    }
                  </div>
               </div>
            </div>

            </div>

            </div>
        </>
    );
};

export default Hero;