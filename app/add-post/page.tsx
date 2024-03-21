"use client";

import styles from "@/app/page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddPost() {
  interface FormData {
    title: string;
    content: string;
  }

  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  const router = useRouter();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, title: event.target.value });
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, content: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform form submission logic here
    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    }

    setFormData({
      title: "",
      content: "",
    });
  };

  return (
    <main className={styles.main}>
      <Link href={"/"}>View Feed</Link>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={formData.title}
          onChange={handleTitleChange}
        />

        <label>Content:</label>
        <input
          type="text"
          value={formData.content}
          onChange={handleContentChange}
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
