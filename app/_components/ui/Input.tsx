interface InputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  classes?: string;
  isRequired?: boolean;
}

export default function Input({
  type = "text",
  label,
  placeholder,
  classes,
  isRequired,
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-orange-500"
      >
        {/* {label} */}
      </label>
      <div className={`relative mt-2 rounded-md shadow-sm ${classes}`}>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
          <span className="text-orange-400 sm:text-sm"></span>
        </div>
        <input
          type={type}
          name={label}
          id={label}
          required={isRequired}
          className="block w-full rounded-xl border-0 py-1.5 pl-5 pr-10 text-gray-900 ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
        {/* <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div> */}
      </div>
    </div>
  );
}
