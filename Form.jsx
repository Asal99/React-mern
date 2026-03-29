import { useEffect, useState } from "react";
import { Button, TextInput, Select, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";

export const Form = () => {
  const [categories, setCategories] = useState([]);

  // FETCH CATEGORIES
  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:8000/category/getAll");
      setCategories(res.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      author: "",
      image: "",
      category: "",
    },

    validate: {
      title: (value) =>
        value.trim().length < 3 ? "Title must be at least 3 characters" : null,

      description: (value) =>
        value.trim().length < 10
          ? "Description must be at least 10 characters"
          : null,

      author: (value) => (value.trim().length === 0 ? "Author required" : null),

      category: (value) => (value ? null : "Select category"),
    },
  });

  // SUBMIT BLOG
  const handleSubmit = async (values) => {
    try {
      const blogData = {
        ...values,
        image: values.image || null, // prevent empty string error
      };

      await axios.post("http://localhost:8000/blog/create", blogData);

      alert("Blog created successfully");

      form.reset();
    } catch (error) {
      console.error("Blog creation failed:", error);
      alert("Failed to create blog");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="flex flex-col gap-4 w-100"
      >
        <TextInput
          label="Title"
          placeholder="Blog title"
          {...form.getInputProps("title")}
        />

        <Textarea
          label="Description"
          placeholder="Blog description"
          {...form.getInputProps("description")}
        />

        <TextInput
          label="Author"
          placeholder="Author name"
          {...form.getInputProps("author")}
        />

        <TextInput
          label="Image URL"
          placeholder="Paste image link"
          {...form.getInputProps("image")}
        />

        <Select
          label="Category"
          placeholder="Select category"
          data={categories.map((cat) => ({
            value: cat._id,
            label: cat.title,
          }))}
          {...form.getInputProps("category")}
        />

        <Button type="submit">Create Blog</Button>
      </form>
    </div>
  );
};
