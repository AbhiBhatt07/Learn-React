/* eslint-disable */

import configur from "../configur/configur";
import { Client, ID, Databases, Storage, query, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(configur.appwrite_blog_app_url)
      .setProject(configur.appwrite_blog_app_projecId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  // Now make the create Post Method/funnctionality:
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        configur.appwrite_blog_app_url,
        configur.appwrite_blog_app_projecId,
        slug /* here slug play role of documentId(it's uniqely identify the post here.
         I use id.unique() also.*/,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  // Now we make Update Post Service:
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        configur.appwrite_blog_app_url,
        configur.appwrite_blog_app_projecId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        configur.appwrite_blog_app_url,
        configur.appwrite_blog_app_projecId,
        slug
      );
      return true; /* true means ki han yai delete ho gaya hain. yai frontend per depend karta hai
        ki vahn kese hum true ko handle karna hain.
      */
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
      return false; /* Aur yai isliye ki ager koi eror aa jaye to flase return kade. */
    }
  }

  // we make get post service:

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        configur.appwrite_blog_app_url,
        configur.appwrite_blog_app_projecId,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }

  // if we get multipal post. If post is active so we use here queries.

  async getPosts(querys = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        configur.appwrite_blog_app_url,
        configur.appwrite_blog_app_projecId,
        querys
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }

  // File  services:
  // upload file service:
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        configur.appwrite_bucket_id,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite serive :: UploadFile :: error", error);
      return false;
    }
  }

  // DeleteFile Service:

  async deleteFile(fileId) {
    try {
      return await this.storage.deleteFile(configur.appwrite_bucket_id, fileId);
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false;
    }
  }

  // Get file Preview service:

  getFilePreviwe(fileId) {
    return this.storage.getFilePreview(configur.appwrite_bucket_id, fileId);
  }
}

// hum yahan isliye yai object create karte hain jis se hame value nikalne main easy ho :
const service = new Service();
export default service;
