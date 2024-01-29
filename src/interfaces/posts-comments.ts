export interface IComment {
    comment_id : number
    username : string
    content : string
    imgUrl : string
    countLikes : number
    onDeleteComment? : (comment_id : number) => void
}

export interface IAuthorInfo {
    role : string
    username : string
    userImgUrl : string
}

export interface IPost<T> {//only to see generics at this
    author : T
    title : string
    description : string
    publishedAt : Date
    comments : IComment []
}