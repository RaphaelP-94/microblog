import Link from "next/link";
import styles from "./CreatePost.module.css";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export default function Page() {
    async function submitAction(formData: FormData) {
        "use server";
        const title = String(formData.get("title"));
        const content = String(formData.get("content"));
        const email = String(formData.get("email"));
        const imageUrl = String(formData.get("imageUrl"));
    
        await prisma.post.create({
            data: {
                title,
                content,
                imageUrl,
                author: {
                    connect: {
                        email
                    }
                }
            }
        });
    
        redirect('/drafts');
    }
    return (
        <main>
            <form action={submitAction} className={styles.form}>
                <h1>Create Post</h1>
                <input name="title" type="text" placeholder="Title" />
                <input name="email" type="email" placeholder="Author (email address)"/>
                <input name="imageUrl" type="url" placeholder="Cover Image URL"/>
                <textarea name="content" placeholder="Content" cols={50}></textarea>
                <button type="submit">Create Post</button>
                <Link className={styles.back} href="/">or Cancel</Link>
            </form>
        </main>
    );
}