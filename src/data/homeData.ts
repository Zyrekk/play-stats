import cl from '../assets/L1.jpg'
import pl from '../assets/PL.jpg'
import es from '../assets/ES.png'
import {LeagueItemProps} from "@/components/HomePage/HomeLeagueItem";

export const leagueList:LeagueItemProps[]=[
    {
        image:pl,
        text:'World\'s Mightiest Football League!',
        buttonText:'Check out more!',
        bgColor:'#ee2b65',
        link:'/PL'
    },
    {
        image:cl,
        text:'Thrilling Ligue 1 results!',
        buttonText:'Check out more!',
        bgColor:'#000',
        link:'/FL1'
    },
    {
        image:es,
        text:'Fight till the Final Whistle in La Liga!',
        buttonText:'Check out more!',
        bgColor:'#FFFFFF',
        link:'/PL'
    }
]
