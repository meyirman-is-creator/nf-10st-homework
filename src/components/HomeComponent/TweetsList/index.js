import { KZ_IMG_PATH, NFACTORIAL } from "../images"
import Tweet from "./Tweet"

export default function TweetsList(){
    const tweets=[
        {
            authorName: 'Free KZ today',
            authorUserName: '@kz',
            img:KZ_IMG_PATH,
            content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
            replies: 200,
            retweets: 1000,
            likes: 500,
            shares:700,
        },
        {
            authorName: 'nFactorial',
            authorUserName: '@nfacotrial',
            img:NFACTORIAL,
            content: 'Sarsenbay Meyirman is genius',
            replies: 200,
            retweets: 2000,
            likes: 600,
            shares:300,
        },
        {
            authorName: 'nFactorial',
            authorUserName: '@nfacotrial',
            img:NFACTORIAL,
            content: 'Sarsenbay Meyirman is genius',
            replies: 200,
            retweets: 2000,
            likes: 600,
            shares:300,
        },
        {
            authorName: 'nFactorial',
            authorUserName: '@nfacotrial',
            img:NFACTORIAL,
            content: 'Sarsenbay Meyirman is genius',
            replies: 200,
            retweets: 2000,
            likes: 600,
            shares:300,
        },
        {
            authorName: 'nFactorial',
            authorUserName: '@nfacotrial',
            img:NFACTORIAL,
            content: 'Sarsenbay Meyirman is genius',
            replies: 200,
            retweets: 2000,
            likes: 600,
            shares:300,
        },
        {
            authorName: 'nFactorial',
            authorUserName: '@nfacotrial',
            img:NFACTORIAL,
            content: 'Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius Sarsenbay Meyirman is genius ',
            replies: 200,
            retweets: 2000,
            likes: 600,
            shares:300,
        },
    ]
    return tweets.map((tweet,index)=><Tweet {...tweet} key = {index}/>)
};