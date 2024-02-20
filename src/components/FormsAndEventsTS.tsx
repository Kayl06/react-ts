import { useState } from "react";

const defaultFormData = {
    title: "",
    description: "",
}

function FormsAndEventsTS() {

    const [formData, setFormData] = useState(defaultFormData);
    const { title, description } = formData;

    const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('form submitted', formData);

        setFormData(defaultFormData);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    return (
        <div>
            <form onSubmit={handlePostSubmit}>

                <div className="grid gap-6 mb-6 md:grid-cols-1">
                    <h1 className="text-4xl">Create a post</h1>
                    <div>
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                        <input placeholder="Enter your title" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="title" id="title" value={title} onChange={onChange} />
                    </div>

                    <div>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <input placeholder="Enter your description..." type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" value={description} onChange={onChange} />
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" name="submit">
                        Post
                    </button>
                </div>

            </form>
        </div>
    );
}

export default FormsAndEventsTS;
