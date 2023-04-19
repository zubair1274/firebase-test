const fixedInputClass="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    customClass,
    registerfeild,
    invalid,
}){
    return(
        <div className="my-5">
            <label htmlFor={labelFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {labelText}
            </label>
            <input
           
              onInput={handleChange}
              value={value}
              id={id}
              name={name}
              type={type}
              required={isRequired}
              className={fixedInputClass+customClass}
              placeholder={placeholder}
              {...registerfeild}
            />
              {invalid && <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{invalid}</p>}
          </div>
    )
}