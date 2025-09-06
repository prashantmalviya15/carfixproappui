import React, { useState } from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control, FieldValues, Path } from 'react-hook-form';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

type FormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  type?: string;
};

export default function Customform<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) {

    const [passwordShow, setShowPassword] = useState(false);
  
  const showpassword = () => {
    setShowPassword(!passwordShow);
  };


  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className="gap-0 mt-3">
          {label && (
            <FormLabel className="md:mb-[12px] text-[] dark:text-white font-medium block">
              {label}
            </FormLabel>
          )}
          <FormControl>
            <div className="relative w-full">
              <Input
                {...field}
                 type={
                  type === "password" ? (passwordShow ? "text" : type) : type
                }
                placeholder={placeholder}
                className={`h-[45px] relative  rounded text-[#000000bb] dark:text-white border border-gray-200 dark:border-[#172036] bg-[#D9D9D9] text dark:bg-[#0c1427] px-[20px] block w-full outline-0 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-500 ${type== "number"?"appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none":""}`}
              />
              {type === "password" &&
                (!passwordShow ? (
                  <span
                    className="absolute right-[10px] top-[10px]"
                    onClick={showpassword}
                  >
                    {<FaEye />}
                  </span>
                ) : (
                  <span
                    className="absolute right-[10px] top-[10px]"
                    onClick={showpassword}
                  >
                    {<FaEyeSlash />}
                  </span>
                ))}
            </div>
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}
    />
  )
}
