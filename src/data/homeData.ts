import cl from '../assets/CL.jpg'
import pl from '../assets/PL.jpg'
import es from '../assets/ES.png'
import {LeagueItemProps} from "@/components/HomePage/HomeLeagueItem";

export const leagueList:LeagueItemProps[]=[
    {
        image:cl,
        text:'Thrilling Champions League results!',
        buttonText:'Check out more!',
        bgColor:'#14144A',
    },
    {
        image:pl,
        text:'World\'s Mightiest Football League!',
        buttonText:'Check out more!',
        bgColor:'#ee2b65',
    },
    {
        image:es,
        text:'Fight till the Final Whistle in La Liga!',
        buttonText:'Check out more!',
        bgColor:'#FFFFFF',
    }
]
