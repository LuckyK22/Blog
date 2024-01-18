// import conf from '../../conf/Conf';
import conf from "../conf/Conf"
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.login({email, password})
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        // eslint-disable-next-line no-useless-catch
        try{
            return await this.account.createEmailSession(email, password);
        }
        catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        // eslint-disable-next-line no-useless-catch
        try{
            return await this.account.get();
        }
        catch(error){
            throw error;
        }
    }

    async logout(){
        // eslint-disable-next-line no-useless-catch
        try{
            await this.account.deleteSessions();
        }
        catch(error){
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
