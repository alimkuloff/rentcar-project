import { FaGasPump } from "react-icons/fa"; 
import { RiSteering2Line } from "react-icons/ri"; 
import { AiFillHeart } from "react-icons/ai"; 
import { BsFillPeopleFill } from "react-icons/bs"; 



import { Car } from '../../types/dataTypes';


import { Link } from "react-router-dom";


const CardComponent = ({car} : {car: Car}) => {
  return (
  <div className="card-wrapper">
    <div className='card w-[300px] rounded-lg bg-[white] p-4'>
    <div className="title-like flex items-center justify-between">
        <Link to={`/cars/${car._id}`} className='title'>
          <h2><b>{car.name}</b></h2>
          <p className='text-[#596780] text-[12px]'>Car</p>
        </Link>
        <button className='like'>
          {
            <AiFillHeart className="text-[red] text-[25px]"/> 
          }
        </button>
    </div>
    <Link to={`/cars/${car._id}`} className="flex items-center justify-center">
      <img className="object-contain w-[80%] min-h-[200px]" src={car.thumbnail} alt="" />
    </Link>
    <div className="features flex items-center justify-center gap-5 mx-auto w-[100%]">
          <div className=" flex items-center gap-2 text-[#90A3BF]"><FaGasPump /><p className="text-[12px]">{car.capacity_fuel}L</p></div>
          <div className="flex items-center gap-2 text-[#90A3BF]"><RiSteering2Line /><p className="text-[12px]">{car.transmission}</p></div>
          <div className="flex items-center gap-2 text-[#90A3BF]"><BsFillPeopleFill /><p className="text-[12px]">{car.seats} People</p></div>
    </div>
    <div className="flex items-center w-full justify-between mt-2 ">
        <p className="price indent-2 text-[#111] font-bold text-[20px]">${car.rent_price}/<small className="text-[12px] text-[#596780]">day</small></p>
        <button className=" flex items-center justify-center px-7 py-1.5 rounded-lg bg-[dodgerblue] text-white">Rent Now</button>
    </div>
  </div>

  </div>
  
  )
}

export default CardComponent