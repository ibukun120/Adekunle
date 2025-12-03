"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="px-4 md:px-[65px] w-full md:w-[590px] bg-white py-4 mt-8 md:mt-0 md:py-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-[#020037]">Let’s get in touch</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-md bg-gray-100 focus:outline-none text-[#939393]"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-600 text-sm">{errors.name.message}</p>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 text-[#939393] rounded-md bg-gray-100 focus:outline-none"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}

        {/* Message */}
        <textarea
          placeholder="Leave me a message"
          className="w-full p-3 rounded-md text-[#939393] bg-gray-100 h-32 focus:outline-none"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="text-red-600 text-sm">{errors.message.message}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 cursor-pointer text-white bg-[#020037] rounded-full hover:opacity-90 transition"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
