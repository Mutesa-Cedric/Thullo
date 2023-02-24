
type Label={
    name:string;
    color:string;
}

export enum Visibility{
    PUBLIC="public",
    PRIVATE="private"
}

export interface User{
   id:string;
   name:string;
   profileImage?:string;
}


export interface List{
    id:string;
    board_id:string;
    title:string;
}

export interface ListItem{
    id:string;
    list_id:string;
    cover?:string;
    title:string;
    labels:Label[];
    members?:string[]
}

export interface Board{
    id:string;
    title:string;
    cover?:string;
    visibility:Visibility;
    members:string[]
}

