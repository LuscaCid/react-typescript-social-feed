import { IPost, IAuthorInfo } from "../interfaces/posts-comments";

export const fakePosts : IPost<IAuthorInfo> []= [
  {
    author : {
      userImgUrl: "https://github.com/luscacid.png",
      username: "Lucas Cid",
      role: "Web Developer"
    },
    title: "Primeiro post da página",
    description: "Primeiro post da página feito pelo adm",
    publishedAt : new Date("2024-01-23 10:00:00"),
    comments: [
      {
        comment_id : Math.round(Math.random() * 5000),
        content: "Conteúdo do comentário de Lucas",
        username: "Lucas Cid",
        countLikes : Math.round(Math.random()*3000),
        imgUrl: "https://github.com/luscacid.png"
      },
      {
        comment_id : Math.round(Math.random() * 5000),
        content: "Esse programador eh brabo dms",
        username: "Anderson Lima",
        countLikes : Math.round(Math.random()*3000),
        imgUrl: "https://github.com/anderson.png"
      },
      {
        comment_id : Math.round(Math.random() * 5000),
        content: "Também gosto muito dele, vei!!!",
        username: "Igor Gabriel",
        countLikes : Math.round(Math.random()*3000),
        imgUrl: "https://github.com/acato21.png"
      },
    ]
  }
  // Adicione mais objetos conforme necessário
];