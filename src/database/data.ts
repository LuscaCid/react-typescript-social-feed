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
  },
  {
    author : {
      userImgUrl: "https://github.com/joao.png",
      username: "Outro Usuário",
      role: "Backend Developer"
    },
    title: "Segundo post da página",
    description: "Segundo post da página com mais informações",
    publishedAt : new Date("2024-01-20 20:00:00"),
    comments: [
      {
        comment_id : Math.round(Math.random() * 5000),
        content: "Conteúdo do comentário de Maria",
        username: "Maria Silva",
        countLikes : Math.round(Math.random()*3000),
        imgUrl: "https://github.com/maria.png"
      },
      {
        comment_id : Math.round(Math.random() * 5000),
        content: "Conteúdo do comentário de João",
        username: "João Oliveira",
        countLikes : Math.round(Math.random()*3000),
        imgUrl: "https://github.com/joao.png"
      },
    ]
  },
  {
    author : {
      userImgUrl: "https://github.com/pietro.png",
      username: "Mais um Usuário",
      role: "Full Stack Developer"
    },
    title: "Terceiro post da página",
    description: "Terceiro post da página com novas informações",
    publishedAt : new Date("2023-12-20 20:00:00"),
    comments: [
      {
        comment_id : Math.round(Math.random() * 5000),
        content: "Conteúdo do comentário de Ana",
        username: "Ana Santos",
        countLikes : Math.round(Math.random()*3000),
        imgUrl: "https://github.com/ana.png"
      },
      {
        comment_id : Math.round(Math.random() * 5000),
        content: "Conteúdo do comentário de José",
        username: "José Oliveira",
        countLikes : Math.round(Math.random()*3000),
        imgUrl: "https://github.com/jose.png"
      },
    ]
  },
  {
    author : {
      userImgUrl: "https://github.com/gustavo.png",
      username: "Usuário Final",
      role: "UX Designer"
    },
    title: "Quarto post da página",
    description: "Quarto post da página com diferentes detalhes",
    publishedAt : new Date("2024-01-23 13:00:00"),
    comments: [
      {
        comment_id : Math.round(Math.random() * 5000),
        content: "Conteúdo do comentário de Carolina",
        username: "Carolina Silva",
        countLikes : Math.round(Math.random()*3000),
        imgUrl: "https://github.com/carolina.png"
      },
      {
        comment_id : Math.round(Math.random() * 5000),
        content: "Conteúdo do comentário de Ricardo",
        username: "Ricardo Oliveira",
        countLikes : Math.round(Math.random()*3000),
        imgUrl: "https://github.com/ricardo.png"
      },
    ]
  },
  // Adicione mais objetos conforme necessário
];