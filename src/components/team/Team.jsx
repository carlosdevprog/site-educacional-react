import AWrapper from "../about/AWrapper"
import Back from "../back/Back"
import TeamCard from "./TeamCard"
import "./team.css"


const Team = () => {
    return (
        <>
            <Back title="Equipe" />
            <section className="team padding">
                <div className="container grid">
                <TeamCard />
                </div>
            </section>
            <AWrapper />
        </>
    )
}

export default Team