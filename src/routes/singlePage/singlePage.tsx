import { AiOutlineStar } from "react-icons/ai"; 
import { AiFillStar } from "react-icons/ai"; 
import { AiFillHeart } from "react-icons/ai"; 
import { useParams } from "react-router-dom";


import { useGetCarByIdQuery } from "../../redux/api/car-api";
import parse from 'html-react-parser';
import { Button } from "antd";

const SinglePage = () => {
  const { id } = useParams(); 

  if (!id) {
    return <div>Error: Invalid car ID</div>; 
  }

  const { data, isLoading, error } = useGetCarByIdQuery(id);
  const {payload: carData} = data || {};

  if (isLoading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>Error loading car details</div>; // Handle errors

  return (
    <div className="bg-[#F6F7F9]">
      <div className="container">
        <div className="wrapper w-full p-4 flex items-center justify-center gap-5">
            <div className=" w-full flex flex-col items-center justify-between gap-5 min-h-[400px]">
                <div className="mainImg w-full bg-[#d3d3d3] min-h-[450px] flex items-center justify-center rounded-xl">
                    <img className="w-full object-contain" src={carData?.thumbnail} alt="" />
                </div>
                <div className="flex w-[650px] gap-4  ">
                    <div className="w-full h-[140px] bg-[#1e8fffbe] rounded-xl">
                        <img className="w-full object-contain" src="" alt="" />
                    </div>
                    <div className="w-full h-[140px] bg-[#1e8fffbe] rounded-xl">
                        <img className="w-full object-contain" src="" alt="" />
                    </div>
                    <div className="w-full h-[140px] bg-[#1e8fffbe] rounded-xl">
                        <img className="w-full object-contain" src="" alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-white w-full min-h-[450px] rounded-xl p-5">
                <div className="header w-full flex justify-between">
                    <div className="name-review flex flex-col ">
                        <h2 className="text-[32px] text-[#1A202C] font-bold">{carData?.name}</h2>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-0.5"><AiFillStar className="text-[gold]" /><AiFillStar className="text-[gold]" /><AiFillStar className="text-[gold]" /><AiFillStar className="text-[gold]" /><AiOutlineStar className="text-[gold]" /></span>
                            <small>450+ reviews</small>
                        </div>
                    </div>
                    <div className="like">
                        <AiFillHeart className="text-[red] text-[25px]"/>
                    </div>
                </div>
                <br />
                <br />
                <div className="description ">
                    <p className="text-[#596780]">{parse(carData?.description ?? "")}</p>
                </div>
                <br />
                <br />
                <div className="desc-icons w-full flex flex-wrap items-center gap-4 justify-evenly">
                    <span className="flex items-center gap-[20px] justify-between w-[40%]"><h3 className="text-[#90A3BF] text-[22px]">Steering:</h3><p className="text-[#596780] text-[26px] font-bold">{carData?.transmission}</p></span>
                    <span className="flex items-center gap-[20px] justify-between w-[40%]"><h3 className="text-[#90A3BF] text-[22px]">Fuel:</h3><p className="text-[#596780] text-[26px] font-bold">{carData?.capacity_fuel}L</p></span>
                    <span className="flex items-center gap-[20px] justify-between w-[40%]"><h3 className="text-[#90A3BF] text-[22px]">Capacity:</h3><p className="text-[#596780] text-[26px] font-bold">{carData?.seats} People</p></span>
                    <span className="flex items-center gap-[20px] justify-between w-[40%]"><h3 className="text-[#90A3BF] text-[22px]">Color:</h3><span className="color w-[30px] h-[30px] rounded-full " style={{backgroundColor: carData?.color}}></span></span>
                </div>
                <br />
                <br />
                <div className="w-full flex items-center justify-evenly">
                    <div className="w-[50%] flex flex-col">
                        <h3 className="text-sky-600 font-bold text-[42px] tracking-wider">${carData?.rent_price}/<small className="text-[12px] text-[#596780]">day</small></h3>
                        {
                            carData!.discount > 0 && (
                            <span className="text-[#59678090] line-through">
                                $ {Math.floor(carData!.rent_price + carData!.rent_price * carData!.discount / 100)}<span className="text-[#59678090] line-through">
                                </span> 
                            </span>
                        )}
                    </div>
                    <Button className="w-[30%] h-[40px] bg-[#3563E9] text-[25px] text-white">Rent Now</Button>
                </div>
            </div>
        </div>
        <div className="w-full h-[300px]"></div>
      </div>
    </div>
    
  );
};

export default SinglePage;