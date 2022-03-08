import { User } from "user/user.model";
import { DocumentReference, Firestore } from "@google-cloud/firestore";

 export class articlePost {
    title = new String();
    content = new String();
    author = User;
    popular = true;
    searchTag = new String();
    date = new Date();

    createArticle(value: any) {
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