import SingleCompetition from "@/components/CompetitionsPage/SingleCompetition";

interface pageProps {
    params: {code: string}
}

const Page = ({params}: pageProps) => {
    return (
        <div className="bg-black w-full flex items-center justify-center">
            <SingleCompetition code={params.code}/>
        </div>
    );
};export default Page;
