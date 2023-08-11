import cl from '../assets/CL.jpg'
import pl from '../assets/PL.jpg'
import es from '../assets/ES.png'
import {LeagueItemProps} from "@/components/Home/LeagueItem";

export const leagueList:LeagueItemProps[]=[
    {
        image:cl,
        text:'Thrilling Champions League results!',
        buttonText:'Check out more!',
        bgColor:'#14144A',
        textColor:'#FFFFFF',
        hoverTextColor:'#000000',
    },
    {
        image:pl,
        text:'World\'s Mightiest Football League!',
        buttonText:'Check out more!',
        bgColor:'#33173D',
        textColor:'#FFFFFF',
        hoverTextColor:'#000000',
    },
    {
        image:es,
        text:'Fight till the Final Whistle in La Liga!',
        buttonText:'Check out more!',
        bgColor:'#FFFFFF',
        textColor:'#000000',
        hoverTextColor:'#FFFFFF',
    }
]
