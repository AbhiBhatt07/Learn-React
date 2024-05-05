/* eslint-disable */

import React, { useCallback } from "react";
import { Button, Input, RTE, Select } from "../index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import appwriteService from "../../appwrite/dbConfig";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
       content: post?.content || "",
        slug: post?.slug || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.useData); /**
    here i use useSelector bcz i need to access to state  of useData to yahan se mere pass user ka 
    data mil jayega.
  */

  /** Ab ham yahan per ek submit functionality banayenge jo ki user ko post ko edit ya new post 
      dalne ke  kamm yaegi,
      yai tab hain jab hamre pass post hain.
      matlab ager post hain to user file ko upload bhi kar sakta hain aur delete bhi.
     */

  const submit = async (data) => {
    if (post) {
      // for upload
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      // for delete
      if (file) {
        await appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = appwriteService.updatePost(post.$id, {
        ...data /** iska matlab hain ki post ko update karne main jo bhi aur extra values hain
            vo sab is ...data main spread hokar mil jayengi.
          */,
        featuredImage: file ? file.$id : undefined /**
          aur iska matlab yai hain ki hum bas featuredImage ko overwrite kar rahen hain,
            ager file hain to featuredImage main file.$id ki value ko dall do, else undefined dal do.
          */,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }

      // aur yai jab ki batt ki hain jab hamre pass post nhi hain.
    } else {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
    }

    if (file) {
      const fileId = file.$id;
      data.featuredImage = fileId;
      const dbPost = await appwriteService.createPost({
        ...data,
        userId: userData.$id,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    }
  };

  /** Now i create slug transfrom functionality. */

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLocaleLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

      return "";
    }

    /** another method  */

    // if (value && typeof value === 'string') {
    //   const slug = value.toLocaleLowerCase().replace(/ /g, '-')
    //   setValue('slug', slug)
    //   return slug
    // }
  }, []);

  /** Now this logic for when user type title on create post so automatic slug generated and thats depand 
   on what we type in title input box.
   */
  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, setValue, slugTransform]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

