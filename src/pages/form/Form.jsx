import { useForm } from "react-hook-form"
import "../form/form.css"

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submit = (data) => {
    console.log(data,"dataa+++++++++++++++++");
    localStorage.setItem("user", JSON.stringify(data))
  }
  return (
    <div className="w-[100%] h-[100vh] lgl:h-[auto] mdl:h-[auto] sml:h-[auto] flex justify-center">
      <div className=" w-[100%] lgl:w-[40%] mdl:w-[50%] sml:w-[60%] border border-black rounded-2xl mt-4 p-4 flex justify-center  bg-slate-200">
        <form
          onSubmit={handleSubmit(submit)}
          className="  flex flex-col w-[80%] "
        >
          <h1 className=" text-center text-lg mb-4">Registration-Form</h1>

          <input
            className="form__input"
            placeholder="Enter Your Name"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <p className="error">first name is required.</p>}

          <input
            className="form__input"
            placeholder="Enter Your Email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="error">email is required.</p>}

          <input
            className="form__input"
            placeholder="Enter Your Phone"
            {...register("Phone", { required: true })}
          />
          {errors.Phone && <p className="error">Phone is required.</p>}

          <div className="flex justify-between">
            <div>
              <input
                className="form__input w-[90%]"
                placeholder="Enter Your Age"
                {...register("age", { required: true })}
              />
              {errors.age && (
                <p className="error">Please enter number for age.</p>
              )}
            </div>
            <div>
              <select {...register("gender")} className="form__input">
                <option>--Gender--</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </select>
            </div>
          </div>
          <textarea
            className="form__input"
            placeholder="Enter Your Hobbies"
            {...register("hobbies", { required: true })}
          />
          {errors.hobbies && <p className="error">hobbies is required.</p>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="form__input bg-slate-800 text-white"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
