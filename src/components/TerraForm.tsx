import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { IoSend } from "react-icons/io5";
import Button from "./ui/Button";
import ErrorsField from "./ui/Errors";
import Loading from "./ui/Loading";
import terraSchema from "../schemas/earth-schema";

const TerraForm = () => {
    const route = useRouter();
    

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(terraSchema)
    })

    const onSubmit = (data: any) => {
        const prevData = JSON.parse(localStorage.getItem("Form") || "[]");
        const newData = {...data, id: data.id++}; 
        localStorage.setItem("Form", JSON.stringify([...prevData, newData]))

        toast.success("Sucessfully registered!")
        handleLoading()
        console.log(data)   
    }

    const [loading, setLoading] = useState(false);
    const handleLoading = () => {
        setLoading(!loading);
        setTimeout(() => {
            setLoading(!loading);
            route.push("/pages/thanks")
        }, 2000);
    }

    useEffect(() => {
        if (errors) {
            Object.entries(errors).forEach(([_, error]) => {
                toast.error(error.message?.toString());
            }); 
        }
      }, [errors]);

    return (
            <form onSubmit={handleSubmit(onSubmit)} className=" w-full flex flex-col items-start justify-center gap-4 relative">
                {loading ? (
                    <Loading />
                ): null}
                <h2 className="text-xl font-semibold text-neutral-600 w-full text-center">Complete the form:</h2>
                 <div className="flex md:flex-row flex-col md:items-center items-start gap-1 justify-around w-full">
                    <div className="flex flex-col items-start w-full md:w-fit">
                        <label className={`${errors.name ? "text-red-600" : "text-neutral-500"} font-normal w-fit`} htmlFor="name">Your name:</label>
                        <input {...register("name")} className="w-full md:w-[12rem] p-2 bg-neutral-300/60 border-1 border-gray-300 rounded-lg text-neutral-600 focus:outline-neutral-400" name="name" id="name" type="text" placeholder="Name" />
                    </div>
                    <div className="flex flex-col items-start text-neutral-500 w-full md:w-fit">   
                        <label className={`${errors.name ? "text-red-600" : "text-neutral-500"} font-normal w-fit`} htmlFor="phone">Your phone:</label>
                        <input {...register("phone")} className="w-full md:w-[10rem] p-2 bg-neutral-300/60 border-1 border-gray-300 rounded-lg text-neutral-600 focus:outline-neutral-400" name="phone" id="phone" type="text" placeholder="Phone" />
                    </div>
                    <div className="flex flex-col items-start text-neutral-500 w-full md:w-fit">
                        <label className={`${errors.name ? "text-red-600" : "text-neutral-500"} font-normal w-fit`} htmlFor="id">Your ID:</label>
                        <input {...register("id")} className="w-full md:w-[10rem] p-2 bg-neutral-300/60 border-1 border-gray-300 rounded-lg text-neutral-600 focus:outline-neutral-400" name="id" id="id" type="text" placeholder="ex: 1T9" />
                    </div>
                </div>
                <div className="flex flex-col items-start text-neutral-500 w-full px-1">
                    <label className={`${errors.name ? "text-red-600" : "text-neutral-500"} font-normal w-fit`} htmlFor="desc">Describe what you'll deliver:</label>
                    <textarea {...register("desc")} className="w-full p-2 bg-neutral-300/60 border-1 border-gray-300 rounded-lg text-neutral-600 focus:outline-neutral-400" name="desc" id="desc" placeholder="Item 1 | Item 2"></textarea>
                </div>
                <div className="flex md:flex-row flex-col md:items-center items-start w-full text-neutral-500 mt-2 gap-1">
                    <div className="flex-col items-start text-neutral-500 w-full md:w-fit">
                        <label className={`${errors.name ? "text-red-600" : "text-neutral-500"} font-normal w-fit`} htmlFor="addressLine">Your Adress Line</label>
                        <input {...register("addressLine")} className="w-full md:w-[21rem] p-2 bg-neutral-300/60 border-1 border-gray-300 rounded-lg text-neutral-600 focus:outline-neutral-400" name="addressLine" id="addressLine" type="text" placeholder="Street: XV Road - Righee ST" />
                    </div>
                    <div className="flex-col items-start text-neutral-500 w-full md:w-fit">
                        <label className={`${errors.name ? "text-red-600" : "text-neutral-500"} font-normal w-fit`} htmlFor="num">Number</label>
                        <input {...register("num")} className="w-full md:w-[10rem] p-2 bg-neutral-300/60 border-1 border-gray-300 rounded-lg text-neutral-600 focus:outline-neutral-400" name="num" id="num" type="text" placeholder="N.266" />
                    </div>
                </div>
                <div>
                    <div className="flex md:flex-row flex-col md:items-center items-start w-full text-neutral-500 mt-2 gap-2 w-full">
                        <div className="flex flex-col items-start text-neutral-500 w-full">
                        <label className={`${errors.name ? "text-red-600" : "text-neutral-500"} font-normal w-full`} htmlFor="country">Country</label>
                            <select {...register("country")} className="w-full md:w-[21rem] p-2.5 bg-neutral-300/60 border-1 border-gray-300 rounded-lg text-neutral-600 focus:outline-neutral-400 h-full" name="country" id="country">
                                <option value="X">X Country</option>
                                <option value="Y">Y Country</option>
                                <option value="Z">Z Country</option>
                                <option value="A">A Country</option>
                            </select>
                        </div>
                        <div className="flex flex-col items-start text-neutral-500 w-full">
                            <label className={`${errors.name ? "text-red-600" : "text-neutral-500"} font-normal w-full`} htmlFor="state">State</label>
                            <select {...register("state")} className="w-full md:w-[12rem] p-2.5 bg-neutral-300/60 border-1 border-gray-300 rounded-lg text-neutral-600 focus:outline-neutral-400 h-full" name="state" id="state">
                                <option value="X">X State</option>
                                <option value="Y">Y State</option>
                                <option value="Z">Z State</option>
                                <option value="A">A State</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-start w-full text-neutral-500 mt-2 gap-2">
                        <div className="flex flex-col items-start text-neutral-500">
                            <label className={`${errors.name ? "text-red-600" : "text-neutral-500"} font-normal w-fit`} htmlFor="city">City</label>
                            <input {...register("city")} className="w-[12rem] p-2 bg-neutral-300/60 border-1 border-gray-300 rounded-lg text-neutral-600 focus:outline-neutral-400" name="city" id="city" type="text" placeholder="São Paulo" />
                        </div>
                        <div className="flex flex-col items-start text-neutral-500">
                            <label className={`${errors.name ? "text-red-600" : "text-neutral-500"} font-normal w-fit`} htmlFor="zipCode">CEP</label>
                            <input {...register("zipCode")} className="w-[12rem] p-2 bg-neutral-300/60 border-1 border-gray-300 rounded-lg text-neutral-600 focus:outline-neutral-400" name="zipCode" id="zipCode" type="text" placeholder="00000-000" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full mt-4">
                    <ErrorsField errors={errors} className="w-full flex items-center justify-center" />
                    <Button type="submit" className="w-[12rem] flex justify-center items-center bg-blue-700 text-neutral-100 p-3 rounded-lg hover:bg-blue-800 cursor-pointer">Enviar<IoSend className="ml-2 text-2xl"/></Button>
                </div>
            </form>
    );
}
 
export default TerraForm;