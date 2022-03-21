import { User } from "user/user.model";
import { Firestore, DocumentData } from "@google-cloud/firestore";

// Firebase Imports
import { Firebase } from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVpw1UcLWTf3k-ad1bbx5-6TWDh2lJW9k",
  authDomain: "angular-news-site-2c6bd.firebaseapp.com",
  projectId: "angular-news-site-2c6bd",
  storageBucket: "angular-news-site-2c6bd.appspot.com",
  messagingSenderId: "548449435605",
  appId: "1:548449435605:web:2049468cf51ce27d70075c",
  measurementId: "G-R6YHJNT5P5"
};

// Initializes the Firebase work
firebase.initializeApp(firebaseConfig);

const db = new Firestore();

 export class articlePost {
    title = new String();
    content = new String();
    author = User;
    popular = true;
    searchTag = new String();
    date = new Date();

    createArticle(value: any,) {
        value.update = {
            title: this.title.valueOf(),
            author: this.author.valueOf(),
            searchTags: this.searchTag.valueOf(),
            content: this.content.valueOf(),
            popular: this.popular.valueOf(),
            date: this.date.valueOf(),
        }
        // Find a way to get it to firebase
        console.log(value);
        db.collection('posts').document('').set(value);
    }

}

export class articleUpdates {

    updateArticle(type: any) {
        // This would update up/down votes, comments, etc
        console.log("I would allow the article to update!");
    }

    downVote(popular: boolean) {
        popular = false;
        return popular;
    }

    upVote(popular: boolean) {
        popular = true;
        return popular;    
    }

}