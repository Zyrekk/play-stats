import SingleCompetition from "@/components/CompetitionsPage/SingleCompetition";

interface pageProps {
    params: { code: string }
}

const Page = ({params}: pageProps) => {

    return (
        <div className="bg-[#122340] min-h-[60vh] w-full flex items-center justify-center">
            <SingleCompetition code={params.code}/>
        </div>
    );
};
export default Page;
