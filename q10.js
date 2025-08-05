const book = {
    id1:{
        postId:'123333',
        author:{
            userId:'gdgshagfsa',
            authname:'joe doe',
            profilepic:'https://url.net/123/pic.jpg',
        },
        content:{
            mediatype:'image',
            mediaUrl:'https//dgddhhd/hdhjdj',
            mediatype:'video',
            mediaUrl:'https://sdhgdhd/sjdj'
        },
        engangement:[{
            loves:233,
            likes:466,
            haha:67,
            wow:23,
        }],
        commment:{
            commID:'dggdh',
            text:'fgghf',
        },
        privacy:'public',
        createdAt:()=>{
            const day= new Date()
            day.getDate();
        },
        updatedAt:()=>{
            const day= new Date()
            day.getDate();
        },
        tags:['alice'],

    }
}


class Book{
    constructor(postId, author, content, engangement, comment, privacy, createdAt, updatedAt,tags){
       this.postId=postId
       this.postId=author
       this.postId=content
       this.postId=engangement
       this.postId=comment
       this.postId=privacy
       this.postId=createdAt
       this.updatedAt=updatedAt
       this.tags=tags
    }
}


const com =book.comment.text = 'hello';

const like = book.engangement.likes +=1;

delete book.tags[0];

const data = JSON.stringify(book);