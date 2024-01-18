/* eslint-disable no-empty */
import conf from "../Conf/Conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client;
    databases;
    bucket;

        constructor(){
            this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectID)
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
        }

    async createPost({title, slug, content, featuredImage, status, userID}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                }
            )
        }
        catch(error){
            console.log("Error in CreatePost", error);
        }

    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch(error){
            console.log("Error occured in Update Post", error);
        }
    }

    async deletePost(slug){
        try{
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
        }catch(error){
            console.log("Error Occured in Delete Post ", error)
        }

    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
            )
        }catch(error){
            console.log("Error Occured in Get Post ", error)
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries,
            )
        }catch(error){
            console.log("Error Occured in Get Posts ", error)
        }
    }

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
        }catch(error){
            console.log("Error Occured in Upload File ", error)
        }
    }

    async deleteFile(fileID){
        try{
            return await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileID
            )
        }catch(error){
            console.log("Error Occured in Delete File ", error)
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service;