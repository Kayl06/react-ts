import { useState } from "react";

const defaultFormData = {
    title: "",
    description: "",
}

function FormsAndEventsTS() {

    const [formData, setFormData] = useState(defaultFormData)
    const { title, description } = formData;

    const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('form submitted', formData);
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
                <h1>Create a post</h1>

                <div>
                    <label htmlFor="title">Title</label>:
                    <input type="text" name="title" id="title" value={title} onChange={onChange} />
                </div>

                <div>
                    <label htmlFor="description">Description</label>:
                    <input type="text" name="description" id="description" value={description} onChange={onChange} />
                </div>

                <button type="submit" name="submit">
                    Post
                </button>
            </form>
        </div>
    );
}

export default FormsAndEventsTS;
