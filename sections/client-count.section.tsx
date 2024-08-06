
export default function ClientCountSection() {
    return <>
        <section id="client_count">
            <h2 className="heading font-bold font-jetbrains">Achievements<span className="font-jetbrains"> Unlocked!</span></h2>
            <p className="font-jetbrains text-center m-auto max-w-6xl">
                Proud of the milestones achieved with satisfied clients, successful projects, and top-notch work quality.
                Let's create something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-evenly mt-24">
                <div className="w-64 flex flex-col justify-start items-center">
                    <i className="bx bx-smile text-7xl text-[#ff6f61]"></i>
                    <h2 className="heading font-bold font-jetbrains mt-2"><span className="font-jetbrains">15</span>+</h2>
                    <p className="font-jetbrains text-center">
                        Satisfied Clients
                    </p>
                </div>
                <div className="w-64 flex flex-col justify-start items-center">
                    <i className="bx bx-briefcase text-7xl text-[#ff6f61]"></i>
                    <h2 className="heading font-bold font-jetbrains mt-2"><span className="font-jetbrains">30</span>+</h2>
                    <p className="font-jetbrains text-center">
                        Completed Projects
                    </p>
                </div>
                <div className="w-64 flex flex-col justify-start items-center">
                    <i className="bx bx-trophy text-7xl text-[#ff6f61]"></i>
                    <h2 className="heading font-bold font-jetbrains mt-2"><span className="font-jetbrains">100</span>%</h2>
                    <p className="font-jetbrains text-center">
                    Work<br/>Quality
                    </p>
                </div>
            </div>
        </section>

    </>;
}