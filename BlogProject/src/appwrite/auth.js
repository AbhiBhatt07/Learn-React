/* eslint-disable */

import configur from "../configur/configur.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  // first we make client & account vaiable
  client = new Client();
  account;

  // so if we make account so first we get client and if we make client we need to 2 things
  // we use constructor

  constructor() {
    this.client
      .setEndpoint(configur.appwrite_blog_app_url)
      .setProject(configur.appwrite_blog_app_projecId);

    // here i make client done.

    this.account = new Account(this.client);

    // and here i make Account using Account inside using client service.
  }

  // Now we need to make an method to make Accounts:

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another function/method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  // Now we need to make login functionality
  async login(email, password) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log(" Yhann error hain.");
      throw error;
    }
  }

  // Now we need to make Cuurent User functionality/method
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }

  // Now we make to logout functionality:
  async logout() {
    try {
      return this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite logout service happen error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
