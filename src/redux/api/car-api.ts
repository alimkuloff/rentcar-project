import { api } from "./index";
import { FetchCar, FetchCarSingle } from "../../types/dataTypes";

const carApi  = api.injectEndpoints({
    endpoints: (build) => ({
        getCars: build.query<FetchCar, void>({
            query: () => ({
                url: "/cars"
            }),
            providesTags: ["CARS"]
        }),

        getCarById: build.query<FetchCarSingle, string>({
            query: (id) => ({
                url: `/cars/${id}`
            }),
            providesTags: ["CARS"]
        }),
    })
})

export const { useGetCarsQuery  , useGetCarByIdQuery    } = carApi