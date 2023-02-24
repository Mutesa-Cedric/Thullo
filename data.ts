import { Board, List, ListItem, User, Visibility } from "./@types";

interface IData {
    users: User[];
    boards: Board[];
    lists: List[];
    listItems: ListItem[]

}

const data: IData = {
    users: [
        {
            id: "zmdadeaedfso",
            name: "Mason Mount",
            profileImage: "https://ehospice.com/wp-content/uploads/2021/03/Photo-06-01-2021-16-20-25-scaled-e1613054543658-770x500-2.jpg"
        },
        {
            id: "xmklssaedsd",
            name: "Antony Fu",
            profileImage: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: "lveqeodiuaisd",
            name: "Bigwi Von",
            profileImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: "oqeiweur28327",
            name: "Kaylie Jenner",
            profileImage: "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: "939023492mdafdf",
            name: "Hun Bee",
            profileImage: "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            id: "39724dasflks",
            name: "Julian Alvalez",
            profileImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
    ],
    boards: [
        {
            "id": "q1dcc",
            "title": "Dev challenges board",
            "cover": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJlcGFyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "visibility": Visibility.PRIVATE,
            "members": [
                "oqeiweur28327",
                "39724dasflks",
                "xmklssaedsd",
                "lveqeodiuaisd",
                "939023492mdafdf"
            ]
        },
        {
            "id": "q2dsd",
            "title": "Simple project board",
            "cover": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "visibility": Visibility.PRIVATE,
            "members": [
                "lveqeodiuaisd",
                "939023492mdafdf",
                "oqeiweur28327"
            ]
        },
        {
            "id": "q3dfs",
            "title": "Khanban template",
            "cover": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2plY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "visibility": Visibility.PRIVATE,
            "members": [
                "oqeiweur28327",
                "39724dasflks",
                "xmklssaedsd",
                "lveqeodiuaisd",
                "939023492mdafdf"
            ]
        },
        {
            "id": "q1dfsd",
            "title": "Habit Building board",
            "cover": "https://images.unsplash.com/photo-1564510714747-69c3bc1fab41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFiaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "visibility": Visibility.PRIVATE,
            "members": [
                "39724dasflks",
                "xmklssaedsd"
            ]
        }
    ],
    "lists": [
        {
            "id": "kdfksfds",
            "board_id": "q1dfsd",
            "title": "Backlog 🤔"
        },
        {
            "id": "mmcsffsd",
            "board_id": "q1dcc",
            "title": "In Progress 📚"
        },
        {
            "id": "df2qw331",
            "board_id": "q1dcc",
            "title": "In Review ⚙️"
        },
        {
            "id": "mxdlaewep",
            "board_id": "q1dcc",
            "title": "Completed 🙌🏽"
        }
    ],
    listItems: [
        {
            "id": "12djss",
            "list_id": "kdfksfds",
            "title": "✋🏿 Add what you'd like to work on below",
            "labels": [
                {
                    "name": "concept",
                    "color": "#EBDCF9"
                }
            ]
        },
        {
            "id": "098sdfas",
            "list_id": "kdfksfds",
            "cover": "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2l0aHVifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "title": "Github jobs challenge",
            "labels": [
                {
                    "name": "Technical",
                    "color": "#2F80ED"
                },
                {
                    "name": "Design",
                    "color": "#D3EADD"
                }
            ],
            "members": [
                "xmklssaedsd"
            ]
        },
        {
            "id": "7834skldxagdase",
            "list_id": "mmcsffsd",
            "cover": "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "title": "✋🏿 Move anything 'ready' here",
            "labels": [
                {
                    "name": "Technical",
                    "color": "#2F80ED"
                },
                {
                    "name": "Design",
                    "color": "#D3EADD"
                }
            ],
            "members": [
                "xmklssaedsd"
            ]
        },
        {
            "id": "823894329u43298423lj",
            "list_id": "mmcsffsd",
            "cover": "https://images.unsplash.com/photo-1668418239962-e08ccbef8bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            "title": "Unsplash challenges - Back-end",
            "labels": [
                {
                    "name": "front-end",
                    "color": "#F2C94C"
                },
                {
                    "name": "concept",
                    "color": "#EBDCF9"
                }
            ],
            "members": [
                "39724dasflks"
            ]
        },
        {
            "id": "iuoeodklsk8201",
            "list_id": "mmcsffsd",
            "cover": "https://images.unsplash.com/photo-1668403783787-88b09617b194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            "title": "Read Atomic Habits in the next 30 days",
            "labels": [
                {
                    "name": "technical",
                    "color": "#D5E6FB"
                }
            ],
            "members": [
                "39724dasflks"
            ]
        },
        {
            "id": "nxmkdwakjeioweih5231",
            "list_id": "df2qw331",
            "cover": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "title": "Build a web dev portfolio",
            "labels": [
                {
                    "name": "technical",
                    "color": "#D5E6FB"
                }
            ]
        },
        {
            "id": "lcclepwpsdpddddd",
            "list_id": "df2qw331",
            "title": "finish nuxtjs Twitter clone",
            "labels": [
                {
                    "name": "fullstack",
                    "color": "#F2994A"
                }
            ]
        },
        {
            "id": "dfacasxcasdfssccccc",
            "list_id": "mxdlaewep",
            "cover": "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "title": "Build company portfolio",
            "labels": [
                {
                    "name": "Technical",
                    "color": "#2F80ED"
                },
                {
                    "name": "concept",
                    "color": "#EBDCF9"
                }
            ],
            "members": [
                "xmklssaedsd"
            ]
        }
    ]
}

export default data;