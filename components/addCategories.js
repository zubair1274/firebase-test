import { useForm } from "react-hook-form";

function AddCategory({ fetchNew,List }) {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`api/categories/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          resetField("name");
          resetField("parentCategory");
          fetchNew();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="rounded-lg bg-white p-10 shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            {/* <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label> */}
            <div className="mt-2">
              <input
              {...register("name")}
                type="text"
                name="name"
                placeholder="Category Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <div className="mt-2">
              <select
                placeholder="Parent Category"
                {...register("parentCategory")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value="">Select Parent Category</option>
                {Object.entries(List).map((item,key) => (
                <option key={key} value={item[0]}>{item[1].category_name}</option>))}
              </select>
            </div>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add New Category
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCategory;
